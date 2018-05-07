export default function(state = null, action) {
  switch (action.type) {
    case "DEPT_SELECTED":
      return action.payload;
  }
  return state;
}
