import React from "react";
import Navbar from "./components/Navbar";
import background from "./background.jpg";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  return (
    <>
      <div
        className="img-fluid"
        style={{
          backgroundImage: `url(${background})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <SearchInput />
      </div>
    </>
  );
}

export default App;
