import React from "react";
import line2 from '../styles/icons/line2.png';
import '../styles/pages/events-page.css'
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import db from "./db.json";


export function EventsPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionChange(selectedOption) {
    setSelectedOption(selectedOption);
  }

  return (
    <div className="header-container">
      <div className="title-event">
        <h2>
          Today's Match 
          <div className="line">
            <img src={line2} alt="line" />
          </div>
        </h2>
        <Dropdown handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
        {selectedOption && <Schedule selectedOption={selectedOption} />}
      </div>
    </div>
  );
}





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


export function Dropdown({ handleOptionChange, selectedOption }) {
  const sportsOptions = db.sports.map((sport) => ({
    value: sport.id,
    label: sport.name,
  }));

  return (
    <div className="dropdown-container">
      <Select
        value={selectedOption}
        onChange={(selectedOption) => {
          handleOptionChange(selectedOption);
        }}
        options={sportsOptions}
        styles={customStyles}
        placeholder="Select Event"
      />
    </div>
  );
}

export function Schedule() {
  const [tableData, setTableData] = useState(db.sports.map(sport => ({
    homeTeam: '',
    awayTeam: '',
    time: '',
    location: '',
    division: '',
    winner: '',
  })));

  const handleTableChange = (event, rowIndex, key) => {
    const newData = [...tableData];
    newData[rowIndex][key] = event.target.value;
    setTableData(newData);
  };

  const handleAddRow = () => {
    const newSport = db.sports[tableData.length];
    const newRow = {
      homeTeam: '',
      awayTeam: '',
      time: '',
      location: '',
      division: '',
      winner: '',
    };
    setTableData([...tableData, newRow]);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Time</th>
          <th>Location</th>
          <th>Division</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            <td><input value={rowData.homeTeam} onChange={(event) => handleTableChange(event, rowIndex, 'homeTeam')} /></td>
            <td><input value={rowData.awayTeam} onChange={(event) => handleTableChange(event, rowIndex, 'awayTeam')} /></td>
            <td><input value={rowData.time} onChange={(event) => handleTableChange(event, rowIndex, 'time')} /></td>
            <td><input value={rowData.location} onChange={(event) => handleTableChange(event, rowIndex, 'location')} /></td>
            <td><input value={rowData.division} onChange={(event) => handleTableChange(event, rowIndex, 'division')} /></td>
            <td><input value={rowData.winner} onChange={(event) => handleTableChange(event, rowIndex, 'winner')} /></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6}><button onClick={handleAddRow}>Add Row</button></td>
        </tr>
      </tfoot>
    </table>
  );
}


/*
export function Dropdown({ handleOptionChange, selectedOption }) {
  const options = [
    { value: 'Basketball', label: 'Basketball' },
    { value: 'Football', label: 'Football' },
    { value: 'Volleyball', label: 'Volleyball' },
    { value: 'Tennis', label: 'Tennis' },
    { value: 'Swimming', label: 'Swimming' },
    { value: 'Athletics', label: 'Athletics' },
  ];

  return (
    <div className="dropdown-container">
      <Select
        value={selectedOption}
        onChange={(selectedOption) => {
          handleOptionChange(selectedOption);
        }}
        options={options}
        styles={customStyles}
        placeholder="Select Event"
      />
    </div>
  );
}
*/




/*
function Schedule({ selectedOption }) {
  const filteredGames = games.filter(game => game.event === selectedOption?.label);
  
  return (
    <div className="container-box">
      <table>
        <thead>
          <tr>
            <th>Home Team &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
            <th>Away Team &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
            <th>Date &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
            <th>Time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
            <th>Location &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
            <th>Division &nbsp; &nbsp; &nbsp; &nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((game) => (
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
  const [schedule, setSchedule] = useState('Regular Season'); // New state for selected schedule

  function handleSubmit(event) {
    event.preventDefault();
    const id = games.length + 1;
    const game = { id, homeTeam, awayTeam, date, time, location, division, schedule }; // Add schedule to the game object
    addGame(game);
    setHomeTeam('');
    setAwayTeam('');
    setDate('');
    setTime('');
    setLocation('');
    setDivision('');
    setSchedule('Select Event'); // Reset the schedule selection
    toast.success('Game added successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
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
          Date: &nbsp;
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <br />
        <label>
          Time: &nbsp;
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
          Division:
          <input
            type="text"
            value={division}
            onChange={(event) => setDivision(event.target.value)}
          />
        </label>
        <br />
        <label>
          Schedule: &nbsp;
          <select value={schedule} onChange={(event) => setSchedule(event.target.value)}>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Swimming">Swimming</option>
            <option value="Tennis">Tennis</option>
            <option value="Athletics">Athletics</option>
          </select>
        </label>
        <br />
        <button className='addgame' type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default GameForm;
*/



























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