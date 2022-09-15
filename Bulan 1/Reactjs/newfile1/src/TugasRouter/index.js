import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Intro from "../Tugas-Intro-ReactJS/tugasIntroReact"
import First from "../Tugas-Hooks/tugasHooks"
import CRUDFruits from '../TugasCRUDHooks/fruits';
import Student from '../Tugas Axios';
import Fruits from '../TugasContext/Buah';
import ContestantsTable from "./ContestantsTable";
import ContestantsForm from "./ContestantsForm"
import { useTheme } from "./theme";
import Tema from "./Tema";    

const Routes = ()=>{
    const theme = useTheme()
    console.log('App Component', theme)

    return(
        <Router>
            <div>
                <nav className={`custom-nav ${theme.theme}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li> 
                            <Link to="/crud-hooks">CRUD Hooks</Link>
                        </li>
                        <li>
                            <Link to="/crud-with-axios">Axios</Link>
                        </li>
                        <li>
                            <Link to="/context-example">Context</Link>
                        </li>
                        <li>
                            <Link to="/contestants">Nilai Mahasiswa</Link>
                        </li>
                        <li>
                            <Link to="/tema">Switch Theme</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <First/>
                            <Intro/>
                        </Route>
                        <Route exact path="/context-example">
                            <Fruits/>
                        </Route>
                        <Route exact path="/crud-with-axios">
                            <Student/>
                        </Route>
                        <Route exact path="/crud-hooks">
                            <CRUDFruits/>
                        </Route>
                        <Route exact path="/contestants">
                            <ContestantsTable/>
                        </Route>
                        <Route exact path="/tema">
                            <Tema/>
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