import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const president1 = 'Джордж Вашингтон';
const president2 = 'Джон Адамс';
const president3 = 'Томас Джефферсон';
const president4 = 'Джеймс Медисон';
const president5 = 'Джеймс Монро';
const president6 = 'Джон Куинси Адамс';
const president7 = 'Эндрю Джексон';
const president8 = 'Мартин Ван Бюрен';
const president9 = 'Уильям Гаррисон';
const president10 = 'Джон Тайлер';
const president11 = 'Полк Джеймс Нокс';
const president12 = 'Закари Тейлор';
const president13 = 'Филлмор Миллард';
const president14 = 'Франклин Пирс';

const arr = [ president7, president8, president9 ];

const arr2 = [
  {
    firstName: 'Джон',
    lastName: 'Тайлер',
    presidentIndex: '10'
  },
  {
    firstName: 'Полк Джеймс',
    lastName: 'Нокс',
    presidentIndex: '11'
  },
  {
    firstName: 'Закари',
    lastName: 'Тейлор',
    presidentIndex: '12'
  },
  {
    firstName: 'Филлмор',
    lastName: 'Миллард',
    presidentIndex: '13'
  },
  {
    firstName: 'Франклин',
    lastName: 'Пирс',
    presidentIndex: '14'
  }
]


ReactDOM.render(
  <>
    <ul className="list">
      <li>{ president1 }</li>
      <li>{ president2 }</li>
      <li>{ president3 }</li>
    </ul>
    <ol start="4">
      <li>{ president4 }</li>
      <li>{ president5 }</li>
      <li>{ president6 }</li>
    </ol>
    <ul className="list">
      {arr.map((president, index) => (
          <li key={index}>{president}</li>
      ))}
    </ul>
    <ul className="filteredList">
      {arr2.filter(president => +president.presidentIndex % 2).map((filteredP, index) => (
          <li key={index}>{filteredP.lastName}, {filteredP.firstName}, {filteredP.presidentIndex}-й</li>
      ))}
    </ul>
  </>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
