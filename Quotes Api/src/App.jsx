import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [author, setAuthor] = useState("");
  const Quotes = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    console.log(res);
    console.log(res.data.author);
    setData(res.data.content);
    setAuthor(res.data.author);
  };
  return (
    <>
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

      <div class="card" style={{ opacity: "0.8" }}>
        <div class="card-header">
          <h2>Quotes</h2>
        </div>
        <div class="card-body">
          <blockquote class="blockquote">
            <p>{data}</p>
            <button onClick={Quotes} type="button" className="btn btn-dark ">
              click
            </button>
            <br />
            <br />
            <footer class="blockquote-footer ">{author}</footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default App;
