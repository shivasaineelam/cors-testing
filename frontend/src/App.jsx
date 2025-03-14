import { useState } from "react";
import axios from "axios";

import "./App.css";
const api_url = import.meta.env.VITE_API_URL;
function App() {
  const [data, setdata] = useState("");
  async function fetchdata() {
    const d = await axios.get(`${api_url}/hello`,{withCredentials:true});
    await axios.get(`${api_url}/yoyoyo`,{withCredentials:true});
    console.log(d.data);
    setdata(d.data.hello);
  }

  return (
    <>
      <div className="App">
        {!data ? (
          <>
            <h1>Fetch Data from API</h1>
            <button onClick={fetchdata}>Fetch Data</button>
          </>
        ) : (
          <div className="data">{data}</div>
        )}
      </div>
    </>
  );
}

export default App;
