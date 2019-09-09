export const reducers = (state = [], action) => {
    let newState = {...state};
    switch (action.type) {
      case 'ADD_USERS':
        newState.users = action.users;
        return {...newState};
      
      default:
        return state;
    }
}