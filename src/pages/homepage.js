import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { addNewHobby } from '../actions/hobby';
import HobbyList from '../components/hobbylist';


const Homepage = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();

    const handleAddHobyy = (data) => {
        // console.log(data);
        const newHobby = {
            id: Math.trunc(Math.random() * 999),
            ...data,
        }
        // console.log(newHobby);
        const action = addNewHobby(newHobby);
        dispatch(action);

    }
    return (
        <div className="home-page">
            <h1> Demo rẽdux</h1>
            <form onSubmit={handleSubmit(handleAddHobyy)}>
                <input type="text" {...register("title")} />
                <button type="submit">Add Hobby</button>
            </form>
            <HobbyList />

        </div>
    )
}

export default Homepage;
