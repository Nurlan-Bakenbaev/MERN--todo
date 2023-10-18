import { Router,Route } from "react-router-dom"
const Routes = (isLogin) => {
    if(isLogin){
  return (
    <Router>
    <Route path="/" element={<Home/>}/>
    </Router>
  )
}}

export default Routes