const darkModeAction = (theme) =>{
  return theme === 'light' ? {type : 'set-dark'} : {type : 'set-light'}
  }
export default darkModeAction