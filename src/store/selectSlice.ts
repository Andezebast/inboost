import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISelectPayLoad {
  name: string;
  value: string;
}

interface ISelect {
  firstInputValue: string;
  secondInputValue: string;
  thirdInputValue: string;
  fourthInputValue: string;
}

const initialState: ISelect = {
  firstInputValue: '',
  secondInputValue: '',
  thirdInputValue: '',
  fourthInputValue: '',
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    select(state, action: PayloadAction<ISelectPayLoad>) {
      switch (action.payload.name) {
        case 'firstInput':
          state.firstInputValue = action.payload.value;
          localStorage.setItem('firstInput', state.firstInputValue);
          break;
        case 'secondInput':
          state.secondInputValue = action.payload.value;
          localStorage.setItem('secondInput', state.secondInputValue);
          break;
        case 'thirdInput':
          state.thirdInputValue = action.payload.value;
          localStorage.setItem('thirdInput', state.thirdInputValue);
          break;
        case 'fourthInput':
          state.fourthInputValue = action.payload.value;
          localStorage.setItem('fourthInput', state.fourthInputValue);
          break;
        default:
          state.firstInputValue = action.payload.value;
      }
    },
    getLocalStorage(state, action: PayloadAction<ISelect>) {
      state.firstInputValue = action.payload.firstInputValue;
      state.secondInputValue = action.payload.secondInputValue;
      state.thirdInputValue = action.payload.thirdInputValue;
      state.fourthInputValue = action.payload.fourthInputValue;
    },
  },
});

export default selectSlice.reducer;
