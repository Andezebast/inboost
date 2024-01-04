import React, { useEffect, useState } from 'react';
import './App.css';
import Select from './component/Select';
import { useAppSelector } from './hooks/redux';
import { useAppDispatch } from './hooks/redux';
import { selectSlice } from './store/selectSlice';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {
    firstInputValue,
    secondInputValue,
    thirdInputValue,
    fourthInputValue,
  } = useAppSelector(state => state.selectReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const initialState = {
      firstInputValue: localStorage.getItem('firstInput') || '',
      secondInputValue: localStorage.getItem('secondInput') || '',
      thirdInputValue: localStorage.getItem('thirdInput') || '',
      fourthInputValue: localStorage.getItem('fourthInput') || '',
    };
    dispatch(selectSlice.actions.getLocalStorage(initialState));
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <div className="loading">is Loading...</div>;
  }
  return (
    <div className="App">
      <Select name="firstInput" value={firstInputValue} />
      {firstInputValue && (
        <Select
          name="secondInput"
          additionalName={firstInputValue}
          value={secondInputValue}
        />
      )}
      {secondInputValue && (
        <Select
          name="thirdInput"
          additionalName={`${firstInputValue}-${secondInputValue}`}
          value={thirdInputValue}
        />
      )}
      {thirdInputValue && (
        <Select
          name="fourthInput"
          additionalName={`${firstInputValue}-${secondInputValue}-${thirdInputValue}`}
          value={fourthInputValue}
        />
      )}
    </div>
  );
};

export default App;
