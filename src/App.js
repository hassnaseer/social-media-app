import './App.css';
import { useEffect, useState } from "react";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Login from "./pages/Login/index"
import { connectClient } from "./accClient";
// import AppRouter from './config/routes';

function App() {
  const [connected, setConnected] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const onConnect = async (userId, persistent) => {
    await connectClient(userId);
    setConnected(true);
    setUserId(userId);

    if (persistent) localStorage.setItem("userId", userId);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) onConnect(userId);
    console.log("userid",userId)

  }, []);
  console.log("connected", connected)
  return (
      <div className="app">
        {!connected && !userId && <Login onConnect={onConnect} />}
        {connected && userId && <NewsFeed />}
      </div>
    // <AppRouter />
  );
}

export default App;
