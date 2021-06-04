import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import AuthScreen from '../auth-screen/auth-screen';
import WinScreen from '../win-screen/win-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(props) {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path={AppRoute.LOSE}>
          <GameOverScreen />
        </Route>
        <Route exact path={AppRoute.RESULT}>
          <WinScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path={AppRoute.DEV_ARTIST}>
          <ArtistQuestionScreen />
        </Route>
        <Route exact path={AppRoute.DEV_GENRE}>
          <GenreQuestionScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
