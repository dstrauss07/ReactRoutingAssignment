import React, { Component } from 'react';
import {Route,  NavLink, Switch, Redirect} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';
import ErrorPage from './containers/ErrorPage/ErrorPage'

class App extends Component {
  render () {
    return (

        <div className="App">
          {/* //1. add URL links */}
          {/* <nav>
            <li><a href="/">Users</a></li>
            <li><a href="/Courses">Courses</a></li>
          </nav> */}

          {/* 2. add a simiple navigation with two links=> */}
          <header>
          <nav>
            <li><NavLink
            to="/Users"
            exact
            >Users
            </NavLink></li>
            
            <li><NavLink
            to="/Courses"
            exact
            >Courses
            </NavLink></li>

          </nav>
          </header>
        
        <Switch>
        <Route path="/Courses" component={Courses}/>
        <Route path="/Users" exact component={Users}/>
        <Redirect from ="/all-courses" to = "/Courses"/>
        <Redirect from ="/" to = "/Courses"/>
        <Route component={ErrorPage}/>          
        </Switch>

      </div>

    );
  }
}

export default App;
