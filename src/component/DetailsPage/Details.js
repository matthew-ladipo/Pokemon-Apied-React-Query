import React from "react";
import details from "../Detailspagestyles/Details.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useFetcher } from "../../Api/FetchRequests";

const Details = () => {
  const { pokeDex } = useFetcher();
  return (
    <>
      {!pokeDex ? (
        ""
      ) : (
        <div className={details.box}>
          <div className={details.subbox}>
            <div className={details.back}>
              {" "}
              <Link to={"/"}>
                <FaArrowLeftLong />
              </Link>
            </div>
            <div className={details.portion}>
              <div className={details.subdetails}>
                <div className={details.pokeImg}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeDex.id}.svg`}
                    alt="imgDetails"
                  />
                </div>
                <div className={details.butns}>
                  <button>Grass</button>
                  <button>poistion</button>
                </div>
              </div>
              <div className={details.outlet}>
                <Outlet />
              </div>
            </div>
            <section>
              <div className={details.buttoncontainer}>
                <div className={details.button}>
                  <Link to="about">
                    <p>About</p>
                  </Link>
                  <Link to="stats">
                    <p>Stats</p>
                  </Link>
                  <Link to="move">
                    <p>Moves</p>
                  </Link>
                  <Link to="evolution">
                    <p>Evolution</p>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
