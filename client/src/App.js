import './App.css';
import {GET_GAMES,GET_GENRES,GET_BY_ID,GET_BY_NAME,POST_GAMES} from './actions/constant';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import LandingPage from './components/landingPage'
import HomePage from './components/home';

function App(props) {
  return (
    <div className="App">
    <Route exact path= '/'> 
    <LandingPage></LandingPage>
    </Route>
    {/* <Route path='/'>
      <nav></nav>
    </Route> */}
    <Route exact path= '/home'>
      <HomePage></HomePage>
    </Route>
  </div>
  );
}

function mapStateToProps(state){
  return{
    videogames: state.videogames,
    genres: state.videogames
  }
}
  function mapDispatchToProps(dispatch){
    return{
      get_videogames: () => dispatch({type: GET_GAMES }),
      get_genres: () => dispatch({type: GET_GENRES }),
      get_by_id: () => dispatch({type: GET_BY_ID }),
      get_by_name: () => dispatch({type: GET_BY_NAME }),
      post_game: () => dispatch({type: POST_GAMES }),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
