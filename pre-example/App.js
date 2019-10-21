import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import TodoApp from './components/pageScreen/TodoApp'
// import TodoApp from './components/utilScreen/TodoApp'
// import BootstrapTest from './components/bootstrap/BootstrapTest'
// import EmailFormBP from './components/bootstrap/EmailFormBP'
// import SignIn from './components/bootstrap/SignIn'

// 不同頁面
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

// 導覽列
import MyNavBar from './pages/MyNavbar'

//使用Router
const App = () => {
  const userStatus = "登入中"
  return (
    <Router>
      <>
      {/* 導覽列: 選單 */}
      <MyNavBar/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/news' component={()=> <News userStatus={userStatus} />}/>
          <Route path='/contact' render={(props)=><Contact {...props} userStatus={userStatus}/>}/>
        </Switch>
      </>
    </Router>
  )
}

export default App


//todo範例
// function App() {
//   return (
//   <>
//     {/* todo範例 */}
//     {/* <TodoApp /> */}

//     {/* bootstrap範例 */}
//     {/* <BootstrapTest /> */}
//     {/* <EmailFormBP /> */}
//     <SignIn />
//   </>
//   );
// }

// export default App;
