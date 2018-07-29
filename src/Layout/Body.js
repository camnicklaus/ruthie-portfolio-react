import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';


const Body = ({mediaMobile}) => (
    <section mediaMobile={mediaMobile}>
    <Switch>
        <Route path="/about" render={() => (<About mediaMobile={mediaMobile} />)} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
    </Switch>
    </section>
)
export default Body;