import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import { data } from "../../../data";

// state is the state before the update,
//action parameter send when invoking eg : "CLEAR_LIST"
//whatever we return from the reducer function will be the new state value
const reducer = (state, action) => {
  // either switch or if -else loops
  if (action.type === CLEAR_LIST) {
    // this will be the new state.
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => {
      return person.id !== action.payload.id;
    });
    return { ...state, people: newPeople };
  }
  //if no matching conditions
  throw new Error(`No Matching action type : ${action.type} -`);
};

export default reducer;
