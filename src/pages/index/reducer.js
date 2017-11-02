const defaultState = {
    homeList : [],
    friendList : []
};

export default (state = defaultState, action) => {

    if(action.type === "GETSTATE"){
        const newState = Object.assign({}, state, {
            homeList:[...action.list],
            friendList : [...action.friendList]
        });

        return newState;
    }

    return state;
}