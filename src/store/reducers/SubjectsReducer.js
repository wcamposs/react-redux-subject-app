import {combineReducers} from 'redux';

const INITIAL_STATE = {
  current: [],
  all_subjects: [
    'Literature',
    'Speech',
    'Writing',
    'Algebra',
    'Geometry',
    'Statistics',
    'Chemisrty',
    'Biology',
    'Physics',
    'Economics',
    'Geography',
    'History',
  ],
};

const subjectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_SUBJECT':
      //copy state
      const {current, all_subjects} = state;

      //remove subject from all_subjects array
      //   const addedSubject = all_subjects.splice(action.payload, 1);

      //add subject in current array
      current.push(action.payload);

      //update the redux state to reflect the change
      const newState = {current, all_subjects};

      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  subjects: subjectsReducer,
});
