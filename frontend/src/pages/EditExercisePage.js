import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]       = useState(exercise.name);
    const [reps, setReps]         = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date.slice(0, 10));
    const [disabled, setDisabled] = useState(false)
    
    const history = useHistory();

    function validateName(e){
        setName(e.target.value)
        if(e.target.value !== ''){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    function validateReps(e){
        setReps(e.target.value)
        if(e.target.value >= 1){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    function validateWeight(e){
        setWeight(e.target.value)
        if(e.target.value >= 1){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    function validateUnit(e){
        setUnit(e.target.value)
        if(e.target.value !== ''){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    function validateDate(e){
        setDate(e.target.value)
        if(e.target.value !== ''){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    const editExercise = async () => {
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exercise._id}`, {
                method: 'PUT',
                body: JSON.stringify(editedExercise),
                headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            //alert("Successfully edited document!");
            history.push("/");
        } //else {
            //const errMessage = await response.json();
            //alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        //}
}

    return (
        <>
        <article>
            <h2>Edit This Exercise</h2>
            <br></br>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Exercise Details</legend>
                    <h4>All fields are required</h4>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => validateName(e)} 
                        id="name" 
                        required />
                    
                    <label for="reps">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={e => validateReps(e)} 
                        id="reps" 
                        required />

                    <label for="weight">Weight</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={e => validateWeight(e)} 
                        id="weight" 
                        required />

                    <label for="unit">Unit</label>
                    <select
                        value={unit}
                        onChange={e => validateUnit(e)} 
                        id="unit" 
                        required >
                            <option value="lbs">lbs</option>
                            <option value="kgs">kgs</option>
                    </select>

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => validateDate(e)} 
                        id="date" 
                        required />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={editExercise}
                        disabled={disabled}
                        id="submit"
                     >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;