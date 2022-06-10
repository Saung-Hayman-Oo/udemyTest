
import Todo from "./components/Todo";
import {Route,Switch} from 'react-router-dom'
import AllmeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

export const Home =()=>{
  return <div>
    <h1 className="text-3xl font-bold">My Todos</h1>
    <Todo text='Learn React'/>
    <Todo text='Master React'/>
    <Todo text='Explore the full React'/>
    
  </div>
}
function App() {
 
  return (
    <Layout>
      
     <Switch>
      <Route path='/' exact>
        <Home/>
        </Route>
        <Route path='/all-meetup'>
          <AllmeetupsPage />
        </Route>
        <Route path='/favourite'>
          <FavouritesPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
     </Switch>
    </Layout>
  );
}

export default App;
