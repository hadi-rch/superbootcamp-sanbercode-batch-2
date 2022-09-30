import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import ContestantsTable from "./ContestantsTable";
import ContestantsForm from "./ContestantsForm"

const Routes = ()=>{
    console.log('App Component')

    return(
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <div className="App">
                    <Switch>
                        <Route exact path="/contestants">
                            <ContestantsTable/>
                        </Route>
                        <Route exact path="/contestants/create">
                            <ContestantsForm/>
                        </Route>
                        <Route exact path="/contestants/:id/edit">
                            <ContestantsForm/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Routes