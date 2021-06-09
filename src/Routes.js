import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PongGoal from './PongGoal/PongGoal'
import Crane from './Crane/Crane'

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route path='/crane' exact component = { props => <Crane {...props} /> } />
                <Route path='/ponggoal' exact component = { props => <PongGoal {...props} /> } />
            </Switch>
        </Router>
    )
}

export default Routes
