import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/PostItem.css'
import {NaviBar} from "./components/NaviBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer";
import {adminRoutes, publicRoutes, privateRoutes} from "./router";
import style from './App.module.scss';
import { UserContext } from './context';

function App() {
    const {user} = useContext(UserContext)
    const RoutesForRender = [...publicRoutes, 
                            ...(!!user ? privateRoutes : []),
                            ...(user?.role === 'ADMIN' ? adminRoutes :[])]

    return (
            <div className={style.AppHeader}>
                <Router>
                    <NaviBar/>
                        <Routes>
                            {RoutesForRender.map((route,index) =><Route key={`route/${index}`} {...route}/>)}
                        </Routes>
                </Router>
                <Footer/>
            </div>
    );
}

export default App;
