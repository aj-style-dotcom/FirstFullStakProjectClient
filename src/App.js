import 'semantic-ui-css/semantic.min.css';
import Navbar from "./Components/Navbar/Index";
import CreatePost from "./Components/CreatePost/Index";
import UpdateUser from "./Components/updatedUser/Index";
import {Switch, Route} from "react-router-dom";
import Home from "./Page/Homepage/Index";
import PageNoteFound from "./Page/PageNoteFound/Index";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/crPost" component={CreatePost}/>
        <Route path="/upPost/:name" component={UpdateUser}/>
      
        
        <Route component={PageNoteFound}/>
        
      
      
      </Switch>
      
    </div>
  );
}

export default App;
