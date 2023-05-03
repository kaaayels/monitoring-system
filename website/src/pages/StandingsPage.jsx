import React from "react";
import line2 from '../styles/icons/line2.png';
import '../styles/pages/standings-page.css'
import { useState } from 'react';
import Select from 'react-select';


export function StandingsPage() {
  return (
    <div className="header-container">
    <div className="title-event">
      <h2>
        Standings 
        <div className="line2">
        <img src={line2} alt="line" />
        </div>
      </h2>
      <Dropdown />
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