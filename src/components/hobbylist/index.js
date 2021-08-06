import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeHobby } from '../../actions/hobby';

const HobbyList = () => {
    const dispatch = useDispatch();
    const hobbys = useSelector((state) => state.hobby.list);
    const handleRemove = (hobby) => {
        const action = removeHobby(hobby);
        dispatch(action);
    }
    return (
        <ul className="hobby-list">
            {hobbys.map(hobby => (
                <div key={hobby.id}>
                    <a>
                        {hobby.title}
                    </a>
                    <button onClick={() => handleRemove(hobby)}  >
                        Delete
                    </button>
                </div>


            ))}
        </ul>
    );
}

export default HobbyList;