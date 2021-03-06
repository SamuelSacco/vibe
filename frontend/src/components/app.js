import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import '../styling/application.scss'
import PlaylistGenerator from './playlist/playlist_generator';
import Quiz from './quiz/quiz';
// import QuizForm from './quiz/quiz_form';
import NavBarContainer from './navbar/navbar_container';
import UserShowContainer from "./user_show/user_show_container"
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PlaylistGeneratorContainer from './playlist/playlist_generator_container';
import {Footer} from './footer/footer'
import FeaturedPlaylistContainer from './playlist/featured_playlist_container';
import SearchPlaylistsContainer from './playlist/search_playlists_container';
import SearchPlaylists from './playlist/search_playlists';
import SearchItemsContainer from './playlist/search_items_container';

const App = () => (
  
  <div className="splash-wrapper">

      <ProtectedRoute component={NavBarContainer}/>
      <Switch>
          <AuthRoute exact path="/" component={LoginFormContainer}/>
          <Route exact path="/quiz" component={Quiz}/>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/playlists" component={PlaylistGeneratorContainer}/>
          <ProtectedRoute exact path="/user/:userId" component={UserShowContainer}/>
          <ProtectedRoute exact path="/random" component={FeaturedPlaylistContainer} />
          <ProtectedRoute exact path="/search" component={SearchPlaylists} />
          <ProtectedRoute exact path="/multiple" component={SearchItemsContainer} />

      </Switch>
      <Footer/>
    </div>
);

export default App;