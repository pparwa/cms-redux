
import './App.css';
import Navbar from './component/NAVBAR';
import Sidebar from './component/Sidebar';
import Menue from './component/menue';
import User from './page/user';
import Info from './page/info';
import Course from './page/course';
import Article from './page/article';
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar />
   <div className='w-100 d-flex justify-content-center' style={{height:"80%"}}>
    <div className='d-flex justify-content-between align-items-center my-4' style={{width:"80%",height:"50%"}}>
      <div >
        <Sidebar />
      </div>
      <div className='border border-dark' style={{width:"70%"}} id='menue'>

       <HashRouter>
         <Menue />
        <Switch>
          <Route path='/user' exact component={User}  />
          <Route path='/info' exact component={Info} />
          <Route path='/courses' exact component={Course} />
          <Route path='/articles' exact component={Article} />
        </Switch>
     </HashRouter>
      </div> 
      
    </div>
    </div>
    </>
  );
}

export default App;
