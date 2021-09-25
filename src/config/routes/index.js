import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NewsFeed from "../../pages/NewsFeed/NewsFeed";
import Login from "../../pages/Login/index"

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={NewsFeed} />
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    )
};

export default AppRouter;