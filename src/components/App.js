import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// import App components
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Featured from './Featured';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header></Header>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" render={ () => <About title="New About"></About> }/>
      <Route exact path="/teachers" component={Teachers} />
      <Route path="/teachers/:topic/:name" component={Featured} />
      <Route path="/courses" component={Courses} />
      <Route component={NotFound} />
    </Switch>

    </div>
  </BrowserRouter>
);

export default App;