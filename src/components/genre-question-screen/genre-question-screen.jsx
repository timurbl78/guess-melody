import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import genreQuestionProp from './genre-question.prop';

function GenreQuestionScreen(props) {
  const [userAnswers, setUserAnswers] = useState([false, false, false, false]);
  const {question, onAnswer, renderPlayer} = props;
  const {genre, answers} = question;

  return (
    <section className="game game--genre">
      <header className="game__header">
        <Logo />

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: 'url(#blur)', transform: 'rotate(-90deg) scaleY(-1)', transformOrigin: 'center'}}
          />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"/>
          <div className="wrong"/>
          <div className="wrong"/>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre}</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, userAnswers);
          }}
        >
          {answers.map((answer, id) => {
            const keyValue = `${id}-${answer.src}`;
            return (
              <div key={keyValue} className="track">
                {renderPlayer(answer.src, id)}
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer"
                    value={`answer-${id}`}
                    id={`answer-${id}`}
                    checked={userAnswers[id]}
                    onChange={({target}) => {
                      const value = target.checked;
                      setUserAnswers([...userAnswers.slice(0, id), value, ...userAnswers.slice(id+1)]);
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
}

GenreQuestionScreen.propTypes = {
  question: genreQuestionProp,
  onAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default GenreQuestionScreen;
