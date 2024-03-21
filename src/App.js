import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [savedValue, setSavedValue] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setInputValue("enter name");
    setSavedValue(inputValue); // Save input value to state variable
  };

  return (
    <div className="text-center mt-4 mb-4">
      <h1 className='text'>expense insight</h1>{' '}
      <h2 className='text'>track your spending...</h2>
      <Form>
        <Form.Group controlId="entering_name">
  
          <input 
            className='text' 
            placeholder="enter name"
            value={inputValue}
            onChange={handleInputChange} 
          />

        </Form.Group>
        <Button 
          className='button mt-3' 
          variant="primary" 
          disabled={!inputValue.trim()}
          onClick={handleButtonClick}
        >
          Get Started
        </Button>
        
      </Form>
      {savedValue && <p>Saved value: {savedValue}</p>}
    </div>
  );
};

export default App;