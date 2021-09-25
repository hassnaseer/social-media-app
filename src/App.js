import './App.css';
import { useEffect, useState } from "react";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Login from "./pages/Login/index"
// import { connectClient } from "./accClient";
// import data from "bootstrap/js/src/dom/data";
import AppRouter from './config/routes';

function App() {
  const [connected, setConnected] = useState(false);
  // const [userId, setUserId] = useState(localStorage.getItem("userId"));
  // const onConnect = async (userId, persistent) => {
  //   await connectClient(userId);
  //   setConnected(true);
  //   setUserId(userId);
  //
  //   if (persistent) localStorage.setItem("userId", userId);
  // };
// console.log("the user id data from local storafe",localStorage.getItem("userId"))
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    // console.log("userid",userId)
    setConnected(userId)
  }, [connected]);
  console.log(connected)
  return (
      // <div className="app">
      //   {!connected && !connected && <Login />}
      //   {connected && connected && <NewsFeed />}
      // </div>
    <AppRouter />
  );
}

export default App;
