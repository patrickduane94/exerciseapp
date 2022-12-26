import React from 'react';
import Exercise from './Exercise';



function ExerciseList({ exercises, onDelete, onEdit }) {

    function searchTable(e){
        var search, table, tr, td, i, th;
        search = e.target.value.toUpperCase();
        table = document.getElementById("exercises");
        tr = table.getElementsByTagName("tr");
        th = table.getElementsByTagName("th");
        for (i = 1; i < tr.length; i++) {
                tr[i].style.display = "none";
                for(var j=0; j<th.length; j++){
                    td = tr[i].getElementsByTagName("td")[j];      
                    if (td) {
                        if (td.innerHTML.toUpperCase()[0] !== '<' && td.innerHTML.toUpperCase().indexOf(search) > -1)                               {
                            tr[i].style.display = "";
                            break;
            }
        }
    }
}
    }
    
    return (
        <><div>
            <input type="text" id="search" onKeyUp={e => searchTable(e)} placeholder="search history..."></input>
        </div><table id="exercises" class="center">
                <caption><strong>Exercise History</strong></caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise, i) => <Exercise
                        exercise={exercise}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} />)}
                </tbody>
            </table></>
    );
}

export default ExerciseList;
