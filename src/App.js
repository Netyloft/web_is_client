import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/PostItem.css'
import {NaviBar} from "./components/NaviBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer";
import {adminRoutes} from "./router";
import {UserContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState({auth: false});

    return (
        <div className={"wrapp"}>
            <UserContext.Provider value={{user, setUser}}>
            <Router>
                <NaviBar/>
                    <Routes>
                        {adminRoutes.map(route =>
                            <Route element={route.component}
                                   path={route.path}/>
                        )}
                    </Routes>
            </Router>
            <Footer/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
