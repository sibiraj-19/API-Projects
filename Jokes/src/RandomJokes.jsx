import axios from "axios";
import React, { useEffect, useState } from "react";
const RandomJokes = () => {
  const [result, setResult] = useState("");
  const Jokes = async () => {
    const rs = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(rs.data.value);
    setResult(rs.data.value);
  };

  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous"
      ></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>

      <div id="card">
        <h6 class="card-header rounded mx-auto d-block">
          <h2>Try Not To Laugh 🤣!!!</h2>
        </h6>{" "}
        <br />
        <div class="card-body rounded mx-auto d-block">
          <h4>Get Your Jokes Here!!!</h4> <br />
          <p>
            <h5> {result} </h5>
          </p>
          <button
            type="button"
            onClick={Jokes}
            class="btn btn-dark mx-auto d-block"
          >
            Get Jokes
          </button>{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default RandomJokes;
