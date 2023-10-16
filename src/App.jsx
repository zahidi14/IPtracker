import { useState } from "react";
import "./app.scss";
import { Input, Map, Result } from "./Component";
import backg from "./assets/pattern-bg-desktop.png";
import mobileBackg from "./assets/pattern-bg-mobile.png";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [fetch, setFetch] = useState({});
  const [latLon, setLatlon] = useState([32.69922, -117.11281]);
  const handleInput = (value) => {
    setInputValue(value);
  };
  const submit = async () => {
    try {
      const get = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_CdquMyfKQMrtZUt744cdKmqorf09u&ipAddress=${inputValue}`
      );
      setFetch(get.data);
      setLatlon([get.data.location?.lat, get.data.location?.lng]);
    } catch (error) {
      console.log({ err: error });
    }
  };
  console.log({ Input: inputValue });
  console.log({ result: fetch });
  console.log({ loc: latLon });
  return (
    <>
      <div className="container">
        <div className="img">
          <img src={backg} alt="background" id="desktop" />
          <img src={mobileBackg} alt="background" id="mobile" />
        </div>
        <h1>IP Address Tracker</h1>
        <Input inputAddress={handleInput} click={submit} />
        <Result data={fetch} />
        <Map cordinate={latLon} />
      </div>
    </>
  );
}

export default App;
