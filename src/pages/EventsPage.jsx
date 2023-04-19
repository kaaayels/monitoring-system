import React from "react";
import line2 from '../styles/icons/line2.png';
import '../styles/pages/events-page.css'
import { useState } from 'react';
import Select from 'react-select'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;


export function EventsPage() {
  return (
    <div className="header-container">
    <div className="title-event">
      <h2>
        Today's Match 
        <div className="line">
        <img src={line2} alt="line" />
        </div>
      </h2>
      <Dropdown />
      <Schedule />
      </div>
    </div>
  );
}



const options = [
  { value: 'Option 1', label: 'Basketball' },
  { value: 'Option 2', label: 'Football' },
  { value: 'Option 3', label: 'Volleyball' },
  { value: 'Option 4', label: 'Tennis' },
  { value: 'Option 5', label: 'Swimming' },
  { value: 'Option 6', label: 'Athletics' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '18px',
    backgroundColor: '#103955',
    width: '250px',
    fontSize: '18px'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#103955' : '#103955',
    color: state.isSelected ? '#FE8926' : '#FE8926',
    fontSize: '18px'

  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#FE8926',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#FE8926',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#FE8926',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#FE8926', 

  }),
  menu: (provided) => ({
    ...provided,
    width: '280px',
  }),
};

export function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionChange(selectedOption) {
    setSelectedOption(selectedOption);
  }

  return (
    <div className="dropdown-container">
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        options={options}
        styles={customStyles}
        placeholder="Select Event"
      />
    </div>
  );
}



function Schedule() {
  return (
    <div className="container-box">
    <table>
      <thead>
        <tr>
          <th>Home Team &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Away Team &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Location &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Division &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr key={game.id}>
            <td>{game.homeTeam}</td>
            <td>{game.awayTeam}</td>
            <td>{game.date}</td>
            <td>{game.time}</td>
            <td>{game.location}</td>
            <td>{game.division}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

const games = [
  {
    id: 1,
    homeTeam: 'Team 1',
    awayTeam: 'Team 2',
    date: 'mm/dd/yy',
    time: 'hh:mm',
    location: 'Bicol University',
    division: 'Mens'
  },
  {
    id: 2,
    homeTeam: 'Team 3',
    awayTeam: 'Team 4',
    date: 'mm/dd/yy',
    time: 'hh:mm',
    location: 'Bicol University',
    division: 'Womens'
  }, 
  // more games...
];

// function to add a new game to the array
function addGame(game) {
  games.push(game);
}


function GameForm() {
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [division, setDivision] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const id = games.length + 1;
    const game = { id, homeTeam, awayTeam, date, time, location, division };
    addGame(game);
    setHomeTeam('');
    setAwayTeam('');
    setDate('');
    setTime('');
    setLocation('');
    setDivision('');
    toast.success('Game added successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      
      closeOnClick: true, // Close the notification when clicked
      pauseOnHover: true, // Pause the timer when hovered
      draggable: true, // Allow to drag the notification
    });

  }

  return (
    <div className='container-form'>
    <form onSubmit={handleSubmit}>
      <label>
        Home Team:
        <input
          type="text"
          value={homeTeam}
          onChange={(event) => setHomeTeam(event.target.value)}
        />
      </label>
      <br />
      <label>
        Away Team:
        <input
          type="text"
          value={awayTeam}
          onChange={(event) => setAwayTeam(event.target.value)}
        />
      </label>
      <br />
      <label>
        Date: 
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <br />
      <label>
        Time: 
        <input
          type="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <br />
      <label>
        Divison:
        <input
          type="text"
          value={division}
          onChange={(event) => setDivision(event.target.value)}
        />
      </label>
      <br />
      <button className='addgame' type="submit">Add Game</button>
    </form>
    </div>
  );
} 
export default GameForm




























/*        womens schedule       


function Schedule2() {
  return (
    <div className="container-box2">
    <table>
      <thead>
        <tr>
          <th>Home Team &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Away Team &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
          <th>Location&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {games2.map((game2) => (
          <tr key={game2.id2}>
            <td>{game2.homeTeam2}</td>
            <td>{game2.awayTeam2}</td>
            <td>{game2.date2}</td>
            <td>{game2.time2}</td>
            <td>{game2.location2}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

const games2 = [
  {
    id2: 6,
    homeTeam2: 'Team 9',
    awayTeam2: 'Team 10',
    date2: 'mm/dd/yy',
    time2: 'hh:mm',
    location2: 'Bicol University',
  },
  {
    id2: 7,
    homeTeam2: 'Team 11',
    awayTeam2: 'Team 12',
    date2: 'mm/dd/yy',
    time2: 'hh:mm',
    location2: 'Bicol University',
  },
  {
    id2: 8,
    homeTeam2: 'Team 13',
    awayTeam2: 'Team 14',
    date2: 'mm/dd/yy',
    time2: 'hh:mm',
    location2: 'Bicol University',
  },
  {
    id2: 9,
    homeTeam2: 'Team 15',
    awayTeam2: 'Team 16',
    date2: 'mm/dd/yy',
    time2: 'hh:mm',
    location2: 'Bicol University',
  },
  // more games...
];

// function to add a new game to the array
function addGame2(game2) {
  games2.push(game2);
}


export function GameForm2() {
  const [homeTeam2, setHomeTeam2] = useState('');
  const [awayTeam2, setAwayTeam2] = useState('');
  const [date2, setDate2] = useState('');
  const [time2, setTime2] = useState('');
  const [location2, setLocation2] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const id2 = games2.length + 1;
    const game2 = { id2, homeTeam2, awayTeam2, date2, time2, location2 };
    addGame2(game2);
    setHomeTeam2('');
    setAwayTeam2('');
    setDate2('');
    setTime2('');
    setLocation2('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Home Team:
        <input
          type2="text"
          value2={homeTeam2}
          onChange2={(event) => setHomeTeam2(event.target.value2)}
        />
      </label>
      <br />
      <label>
        Away Team:
        <input
          type2="text"
          value2={awayTeam2}
          onChange2={(event) => setAwayTeam2(event.target.value2)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type2="date"
          value2={date2}
          onChange2={(event) => setDate2(event.target.value2)}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type2="time"
          value2={time2}
          onChange2={(event) => setTime2(event.target.value2)}
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type2="text"
          value2={location2}
          onChange2={(event) => setLocation2(event.target.valu2e)}
        />
      </label>
      <br />
      <button type="submit">Add Game</button>
    </form>
  );
}


*/