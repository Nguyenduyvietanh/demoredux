export const addNewHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        payload: hobby,
    }
}

export const removeHobby = (hobby) => {
    return {
        type: 'REMOVE_HOBBY',
        payload: hobby,
    }
}