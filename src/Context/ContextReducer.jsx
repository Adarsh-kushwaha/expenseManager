const ContextReducer = (state, action) => {
  let transactions;
  if (action.type === "DELETE") {
    transactions = state.filter((t) => t.id !== action.payload);
    return transactions;
  } else if (action.type === "ADD") {
    transactions = [action.payload, ...state];
    return transactions;
  } else {
    return state;
  }
};

export default ContextReducer;
