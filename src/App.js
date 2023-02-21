import React from "react";

import background from "./background.jpg";
import Navbar from "./components/Navbar/Navbar";
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
