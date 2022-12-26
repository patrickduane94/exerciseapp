import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]       = useState('');
    const [reps, setReps]         = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            //alert("Successfully added the exercise!");
            history.push("/");
        }
    };


    return (
        <>
        <article>
            <h2>Add a New Exercise</h2>
            <br></br>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Exercise Details</legend>
                    <h4>All fields are required</h4>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        placeholder="Squat"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name" 
                        required />
                    
                    <label for="reps">Reps</label>
                    <input
                        min={1}
                        type="number"
                        value={reps}
                        placeholder="5"
                        onChange={e => setReps(e.target.value)} 
                        id="reps" 
                        required />

                    <label for="weight">Weight</label>
                    <input
                        min={1}
                        type="number"
                        placeholder="225"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" 
                        required />

                    <label for="unit">Unit</label>
                    <select
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        id="unit"
                        required >
                            <option value="" disabled selected></option>
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                    </select>
                    
                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date"
                        required />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add Exercise</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;