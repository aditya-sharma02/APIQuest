import { useState } from "react";
import "./styles/app.css"
import Message from "./components/Message";
import Card from "./components/Card";
import Loader from "./components/Loader";

function App() {
  const [text, settext] = useState("");
  const [error, seterror] = useState(false);
  const [load, setload] = useState(false);
  const [data, setdata] = useState();
  const handlechange = (e) => {
    settext(e.target.value);
  }
  const submit = async (e) => {
    e.preventDefault();
    // console.log(text);
    setload(true);
    let response = await fetch(`https://api.punkapi.com/v2/beers/${text}`);
    response = await response.json();
    setload(false);
    // console.log(response)
    if (response.statusCode === 404) {
      seterror(true);
      setdata()
    }
    else {
      setdata(response)
    }
  }
  if (error) {
    alert("No data available")
    seterror(false)
  }
  else if (load) {
    return (
      <>
        <Loader />
      </>
    )
  }
  else
    return (
      <>
        <div className="body">
          <nav className="nav">
            <div className="searchela">APIQuest</div>
            <div className="nav1">
              <input type="number" className="input" value={text} onChange={handlechange} name="text" required />
            </div>
            <div className="nav2">
              <button className="button" onClick={submit}>click me</button>
            </div>
          </nav>
          {!data && <Message />}
          <section className="cards">
            {data && data.map((elem, id) => {
              return (
                <Card
                  key={id}
                  data={elem}
                  id={id}
                />
              )
            })}
          </section >
        </div >

      </>
    );
}

export default App;
