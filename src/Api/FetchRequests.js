import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fetch from "./Fetch.module.css";
export const Fetched = React.createContext(null);

const FetchRequests = ({ children }) => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokeData, setPokeData] = useState([]);
  const [pokeDex, setPokeDex] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemon = async (res) => {
    res?.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((prev) => {
        let newData = [...prev, result.data];
        return newData;
      });
    });
  };

  const getUsers = async () => {
    const { data } = await axios.get(url);
    getPokemon(data?.results);
    console.log({ data });
    setNextUrl(data?.next);
    setPrevUrl(data?.previous);
    return data;
  };

  const infoPokemon = (poke) => {
    setPokeDex(poke);
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryFn: getUsers,
    queryKey: ["postsData", url],
    refetchOnWindowFocus: false,
    enabled: url.length > 0,
  });
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className={fetch.fixed}>
      <div className={fetch.content}>
        <Fetched.Provider
          value={{
            data,
            isLoading,
            pokeDex,
            infoPokemon,
            next: nextUrl,
            prev: prevUrl,
            pokeData,
            setPokeData,
            setUrl,
            refetch,
          }}
        >
          {children}
        </Fetched.Provider>
      </div>
    </div>
  );
};

export default FetchRequests;

export const useFetcher = () => useContext(Fetched);
