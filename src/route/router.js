//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件
// import Home from '../pages/Home';
// import Login from "../pages/Login";
// import About from './pages/about';
import Ex1 from "../pages/Ex1";
import Ex2 from "../pages/ex2/Ex2";
import Ex3 from "../pages/ex3/Ex3";
import Ex4 from "../pages/Ex4/Ex4";
import Home from "../pages/Home";
//引入一些模块
import { BrowserRouter as Router,Switch, Route,Redirect} from "react-router-dom";

function router(){
    return (
        <Router>
            <Switch>
                {/*<Redirect from="/" exact to="/index"/>*/}
                <Route path="/Ex1" component={Ex1}/>
                <Route path="/Ex2" component={Ex2}/>
                <Route path={'/Ex3'} component={Ex3}/>
                <Route path={'/Ex4'} component={Ex4}/>
                <Route path="/" component={Home} />

            </Switch>

            {/*<Route path="/about" component={About} />*/}
        </Router>);
}

export default router;
