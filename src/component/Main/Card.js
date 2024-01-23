import React from "react";
import card from "./Card.module.css";
import { Fetched } from "../../Api/FetchRequests";
import { Link } from "react-router-dom";
import { useFetcher } from "../../Api/FetchRequests";

const Card = () => {
  const { isLoading, infoPokemon, pokeData } = useFetcher(Fetched);
  return (
    <>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        pokeData.map((item) => (
          <div>
            <div className={card.card} key={item}>
              <img src={item?.sprites.other.dream_world.front_default} alt="" />
              <h2>{item.name}</h2>
              <Link to="details/about">
                <button onClick={() => infoPokemon(item)}>About</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
