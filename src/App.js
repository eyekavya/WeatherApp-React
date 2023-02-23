import React, { useState } from "react";

import background from "./background.jpg";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [data, setData] = useState();

  const updateData = (data) => {
    setData(data);
  };

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
        <SearchInput updateData={updateData} />
        <Card data={data} />
      </div>
    </>
  );
}

export default App;
