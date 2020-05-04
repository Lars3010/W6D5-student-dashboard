import React from 'react';
import Chart from './Chart';

function Student(props){
    const studentInfo = props.studentInfo[0];
    return (
        <div>
            <h1>{studentInfo.firstName}</h1>
            <Chart graphData={props.data}/>
        </div>
    )
}

export default Student;