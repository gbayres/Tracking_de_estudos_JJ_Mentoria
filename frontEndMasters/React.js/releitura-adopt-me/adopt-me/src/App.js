import SearchParams from "./Components/SearchParams";
import Details from "./Components/Details";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <header>
                    <Link to="/">Adopt  Me!</Link>
                </header>

                <Switch>
                    <Route path="/details/:id">
                        <Details/>
                    </Route>

                    <Route path="/">
                        <SearchParams/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )

}


export default App;