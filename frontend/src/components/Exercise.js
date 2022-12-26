import React from 'react';

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.slice(0, 10)}</td>
            <td><i class="fa fa-trash-o" onClick={() => onDelete(exercise._id)} ></i></td>
            <td><i class="fa fa-pencil-square-o" onClick={() => onEdit(exercise)} ></i></td>
        </tr>
    );
}

export default Exercise;