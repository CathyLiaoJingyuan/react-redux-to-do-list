const defalutState = {
  inputValue: "hii",
  list: []
};

export default (state = defalutState, action) => {
  if (action.type === "change_input_value") {
    const newState = [...state];
    newState.inputValue = action.value;
    return newState;
  }
  return state;
};
