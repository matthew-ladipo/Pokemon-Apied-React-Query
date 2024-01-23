import React from "react";
import { useFetcher } from "../../Api/FetchRequests";
import style from "../Detailspagestyles/Stats.module.css";

const Stats = () => {
  const { pokeDex } = useFetcher();
  return (
    <>
      {!pokeDex ? (
        ""
      ) : (
        <>
          <div className={style.stats}>
            <h1>{pokeDex.name}</h1>
            <h3>Stats:</h3>
            <div className={style.result}>
              <div>
                {pokeDex.stats.map((poke) => {
                  return (
                    <>
                      <p className={style.parag}>
                        <div className={style.stat}>
                          <h4>{poke.stat.name}</h4>
                        </div>
                        <h4 className={style.data}>{poke.base_stat}</h4>
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Stats;
