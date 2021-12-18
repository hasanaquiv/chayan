import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FormAdvanced = () =>{
  const [selectedOption, setSelectedOption] = React.useState()

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption.value);
  };
  return (
    <>
    <h1>Option Selected</h1>
    <h1>Option Selected</h1>
    <h1>Option Selected</h1>
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
    </>
  );
}

export default FormAdvanced;
