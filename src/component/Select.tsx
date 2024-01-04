import React, { FC, useState } from 'react';
import './Select.css';
import { useAppDispatch } from '../hooks/redux';
import { selectSlice } from '../store/selectSlice';
import { Arrow } from '../svg/Arrow';
/*---------------------------------------------*/
interface ISelect {
  name: string;
  additionalName?: string;
  value: string;
}
const values = [1, 2, 3, 4, 5, 6];
const Select: FC<ISelect> = ({ name, additionalName, value }) => {
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = useState(value || 'none');
  /*---------------------------------------------*/
  const handleSelectEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectObj = {
      name: event.target.name,
      value: event.target.value,
    };
    setSelectedValue(event.target.value);
    dispatch(selectSlice.actions.select(selectObj));
  };
  return (
    <div className={`${name} select-box`}>
      <select
        name={name}
        className="select"
        onChange={handleSelectEvent}
        value={selectedValue}
      >
        <option value="none" disabled hidden>
          Виберіть значення
        </option>
        {values.map(optionValue => (
          <option value={optionValue} key={optionValue}>
            Варіант{' '}
            {additionalName ? additionalName + '-' + optionValue : optionValue}
          </option>
        ))}
      </select>
      <Arrow />
    </div>
  );
};

export default Select;
