import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// 不同頁面
import Home from './pages/Home'
import Student from './pages/Student'

// 導覽列

//使用Router
const App = () => {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/student/:id?" component={Student} />
        </Switch>
      </>
    </Router>
  )
}

export default App
