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
import artistQuestionProp from '../artist-question-screen/artist-question.prop';
import genreQuestionProp from '../genre-question-screen/genre-question.prop';

function App(props) {
  const {errorsCount, questions} = props;
  const [firstQuestion, secondQuestion] = questions;

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
          <ArtistQuestionScreen
            onAnswer={() => {}}
            question={secondQuestion}
          />
        </Route>
        <Route exact path={AppRoute.DEV_GENRE}>
          <GenreQuestionScreen
            onAnswer={() => {}}
            question={firstQuestion}
          />
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
  questions: PropTypes.arrayOf(
    PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired,
  ),
};

export default App;
