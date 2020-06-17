import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const president1 = 'Джордж Вашингтон',
      president2 = 'Джон Адамс',
      president3 = 'Томас Джефферсон',
      president4 = 'Джеймс Медисон',
      president5 = 'Джеймс Монро',
      president6 = 'Джон Куинси Адамс',
      president7 = 'Эндрю Джексон',
      president8 = 'Мартин Ван Бюрен',
      president9 = 'Уильям Гаррисон'

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
    presidentIndex: "14"
  }
]


const arr3 = [
  {
    "id": "666958530825467",
    "title": "Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide",
    "place": "Hide",
    "date": "2020-06-19T20:00:00.000Z"
  },
  {
    "id": "786185895252176",
    "title": "Захист скверу імені Чкалова",
    "place": "Сквер Им. Чкалова",
    "date": "2020-06-22T09:00:00.000Z"
  },
  {
    "id": "623921328209118",
    "title": "Живая музыка на летней террасе",
    "place": "От Заката до Рассвета",
    "date": "2020-06-14T17:00:00.000Z"
  },
  {
    "id": "909559356190295",
    "title": "Amer (2009)",
    "place": "Кіноклуб Кіноха",
    "date": "2020-06-13T15:00:00.000Z"
  },
  {
    "id": "589272605321022",
    "title": "В парк Межигорье на теплоходе",
    "place": "Причал №6, Почтовая пл.",
    "date": "2020-06-13T07:45:00.000Z"
  }
];

const getTimeOfTheDay = (hrs) => {
  let timeOfTheDay = '';
  hrs = parseInt(hrs);

  if (21 < hrs || hrs <= 5) {
    timeOfTheDay =  'Ночь';
  } else if (5 < hrs && hrs  <= 11) {
    timeOfTheDay =  'Утро';
  } else if (11 < hrs && hrs  <= 17) {
    timeOfTheDay =  'День';
  } else if (17 < hrs && hrs  <= 21) {
    timeOfTheDay =  'Вечер';
  }
  return timeOfTheDay;
}

const form = new FormData();

form.append('name', 'name')
form.append('password', 'password')

const handleSubmit = (e) => {
  const data = {
    name: document.querySelector('.form__name').value,
    password: document.querySelector('.form__psw').value,
    rate: document.querySelector('input[name="rate"]:checked').value,
    newsletter: document.querySelector('.form__news').value
  };
  e.preventDefault();

  fetch('https://postman-echo.com/post',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': '*'
        },
        mode: 'no-cors',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
      })
      .then(console.log(data))
}

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

    <ul className="list"
        style={{
          backgroundColor: "#ddd",
          paddingBottom: "1em",
          paddingTop: "1em",
          fontWeight: "bold"
        }}>
      {arr2.filter(president => +president.presidentIndex % 2)
        .map((filteredP, index) => (
          <li key={index}>
            {filteredP.lastName}, {filteredP.firstName}, {filteredP.presidentIndex}-й
          </li>
      ))}
    </ul>

    <ul className="list">
      {arr3
          .sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1)
          .map((el, index) => (
          <li key={index}
              className={new Date() > new Date(el.date) ? 'half-transparent' : ''}
          >
            <a href={`https://www.facebook.com/events/${el.id}/`}
               target="_blank"
               rel="noopener noreferrer"
            >
              {el.title}
            </a>

            <p>
              {getTimeOfTheDay( new Date(el.date).getHours() )},{' '}
              {new Intl.DateTimeFormat("en-GB", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
              }).format(new Date(el.date))}
            </p>

            <p>{el.place}</p>
          </li>
      ))}
    </ul>

    <form className="form" onSubmit={handleSubmit}>
      <label>
        <p>Имя:</p>
        <input type="text" name="name" placeholder="Eva" className="form__name" required/>
      </label>
      <label>
        <p>Пароль:</p>
        <input type="password" name="password" className="form__psw" required minLength={4}/>
      </label>
      <label>
        <input type="radio" name="rate" value="basic" className="form__rate" defaultChecked/>
        Базовый тариф
      </label>
      <label>
        <input type="radio" name="rate" value="premium" className="form__rate"/>
        Премиум тариф
      </label>
      <label>
        <input type="checkbox" className="form__news" defaultChecked/>
        Присылайте мне новости на почту
      </label>
      <input type="submit" value="Купить" />
    </form>
  </>,
  document.getElementById('root')
);


serviceWorker.unregister();
