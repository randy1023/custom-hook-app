/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        className="btn btn-primary mt-2"
        onClick={() => decrement(1)}
        disabled={isLoading}
      >
        Anterior
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Siguiente
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={reset}
        disabled={isLoading}
      >
        Reset
      </button>
    </>
  );
};
