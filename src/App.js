import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/PostItem.css'
import {NaviBar} from "./components/NaviBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer";
import {adminRoutes} from "./router";
import style from './App.module.scss';

function App() {
    return (
            <div className={style.AppHeader}>
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
            </div>
    );
}

export default App;
