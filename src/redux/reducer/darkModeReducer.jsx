const initialState = {
  theme: 'light'
};
  const darkModeReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'set-light':
    return {theme: 'light'}
    case 'set-dark':
    return {theme: 'dark'}
    default:
      return state; 
  }
} 
export default darkModeReducer