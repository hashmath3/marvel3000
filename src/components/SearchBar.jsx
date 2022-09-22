import React, { useRef } from "react";

import Button from "./Button";

export default function SearchBar({ handleClick, setHeroes, setError }) {
  let input = useRef();
  return (
    <form>
      <input type="text" placeholder="Avengers....." ref={input} />
      <Button 
        text={"Assemble"}
        handleClick={(e) => {
          handleClick(e, input.current.value)
            .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}