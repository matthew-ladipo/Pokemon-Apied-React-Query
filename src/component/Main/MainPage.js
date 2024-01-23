import React from "react";
import title from "../../image/imagehead.png";
import main from "./Main.module.css";
import Card from "./Card";
import { useFetcher } from "../../Api/FetchRequests";

const MainPage = ({}) => {
  const {  setPokeData, next, prev, setUrl } = useFetcher();

  // console.log({ pokeData, prev, next,url, setUrl });

  return (
    <>
      <div className={main.middle}>
        <img src={title} alt="" />
      </div>
      <div className={main.button}>
        <div>
          {prev && (
            <button
              className={main.prev}
              onClick={() => {
                setPokeData([]);
                setUrl(prev);
              }}
            >
              Prev
            </button>
          )}
        </div>
        <div>
          {next && (
            <button
              className={main.next}
              onClick={() => {
                setPokeData([]);
                setUrl(next);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
      <div className={main.pre}>
        <div className={main.repeat}>
          <Card />
        </div>
      </div>
    </>
  );
};

export default MainPage;
