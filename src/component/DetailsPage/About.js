import React, { useContext } from "react";
import style from "../Detailspagestyles/About.module.css";
import { useFetcher } from "../../Api/FetchRequests";

const About = () => {
  const { pokeDex } = useFetcher();
  return (
    <>
      {!pokeDex ? (
        ""
      ) : (
        <>
          <div className={style.about}>
            <h1>{pokeDex.name}</h1>
            <p>
              Experience - <span> {pokeDex.base_experience}</span>
            </p>

            <section className={style.meter}>
              <p>
                {pokeDex.height}m (2'3") <br /> <span>height</span>
              </p>
              <p>
                {pokeDex.weight} kg (15.21 lbs)
                <br /> <span>weight</span>
              </p>
            </section>

            <div className={style.ability}>
              {pokeDex?.abilities.map((poke) => {
                return (
                  <div className={style.abilities}>
                    <div className={style.lists}>
                      <p>{poke.ability.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
