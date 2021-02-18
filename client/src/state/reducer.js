export const initialState = {
    user: null,
    posts: null 
};

export const actionTypes = {
    SET_USER: "SET_USER",
    INIT_POSTS: "INIT_POSTS",
    ADD_POST: "ADD_POST"
};

const reducer = (state, action) => {
    console.log("action =  ", action);

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state, 
                user: action.user
            };
        case actionTypes.INIT_POSTS:
            return {
                ...state, 
                posts: action.posts 
            };
        case actionTypes.ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts]
            };
        default: 
            return state;
    }
}

export default reducer;
