import './App.css';
import { useEffect, useState } from "react";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Login from "./pages/Login/index"
// import { connectClient } from "./accClient";
// import data from "bootstrap/js/src/dom/data";
import AppRouter from './config/routes';

function App() {
  const [connected, setConnected] = useState(null);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    // console.log("userid",userId)
    setConnected(userId)
  }, [connected]);
  console.log(connected)
  return (
  //       if ((localStorage.getItem("userName") !== null){
  //   // you have values for both userName and password
  // }
  //     <div className="app">
  //       {!connected !==null ? <NewsFeed />: <Login />}
  //       {/*{localStorage.getItem("userName") !== null ? <NewsFeed />}*/}
  //     </div>
    <AppRouter />
  );
}

export default App;
