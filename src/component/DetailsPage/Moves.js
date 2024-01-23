import React from "react";
import { useFetcher } from "../../Api/FetchRequests";
import style from "../Detailspagestyles/Moves.module.css";

const Moves = () => {
  const { pokeDex } = useFetcher();
  return (
    <>
      {!pokeDex ? (
        ""
      ) : (
        <>
          <div className={style.moves}>
            {pokeDex.moves.map((items) => {
              return (
                <div className={style.words}>
                  <p>{items.move.name}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Moves;
