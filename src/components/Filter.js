import React from 'react';

function Filter(props){
    return (
        <form onChange={props.handleFilterChange} className="filter">
            <h3>Filter by grade</h3>
            <div id="input-container">
                <label>Both Grades: 
                    <input type="radio" name="gradeFilter" id="both-grades" value="both" defaultChecked/>
                </label>
                <label>Difficulty Grade: 
                    <input type="radio" name="gradeFilter" id="difficulty-grade" value="difficulty"/>
                </label>
                <label>Review Grade: 
                    <input type="radio" name="gradeFilter" id="review-grade" value="review"/>
                </label>
            </div>
        </form>
    )
}

export default Filter;