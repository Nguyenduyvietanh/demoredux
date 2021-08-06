
const initialState = {
    list: [],
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state.list]
            newList.push(action.payload)
            return {
                ...state,
                list: newList
            }
        }
        case 'REMOVE_HOBBY': {
            const id = action.payload.id
            // console.log(id);
            const newList = state.list.filter(item => item.id !== id)
            return {
                ...state,
                list: newList,
            };
        }
        default:
            return state;
    }
}

export default hobbyReducer;