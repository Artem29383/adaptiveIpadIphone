export const checkLocalStorage = (
  fieldName,
  dispatchState,
  initialArray,
  func,
  count
) => {
  if (localStorage.getItem(fieldName)) {
    dispatchState(JSON.parse(localStorage.getItem(fieldName)));
  } else {
    dispatchState(func(initialArray, count));
  }
};
