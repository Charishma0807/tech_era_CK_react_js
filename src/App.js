import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

// Replace your code here
import Home from './components/home'
import CourseData from './components/course'
import NotFound from './components/notfound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseData} />
    <Route exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
