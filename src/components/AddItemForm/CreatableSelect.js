import React from 'react';
import CreatableSelect from 'react-select/creatable';

const Select = () => {
  const colourOptions = [
    {
      value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true,
    },
    {
      value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true,
    },
    {
      value: 'purple', label: 'Purple', color: '#5243AA',
    },
    {
      value: 'red', label: 'Red', color: '#FF5630', isFixed: true,
    },
    {
      value: 'orange', label: 'Orange', color: '#FF8B00',
    },
    {
      value: 'yellow', label: 'Yellow', color: '#FFC400',
    },
    {
      value: 'green', label: 'Green', color: '#36B37E',
    },
  ];

  const handleChange = (inputValue, actionMeta) => {
    console.log(inputValue);
    console.log(actionMeta.action);
  };

  const handleInputChange = (newValue, actionMeta) => {
    console.log(newValue);
    console.log(actionMeta.action);
  };

  return (
    <CreatableSelect
      isClearable
      onChange={handleChange}
      onInputChange={handleInputChange}
      options={colourOptions}
    />
  );
};

export default Select;
