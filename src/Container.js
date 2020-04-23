import React from 'react';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            students: [
                {id: 1, firstName: "Evelyn"},
                {id: 2, firstName: "Aranka"},
                {id: 3, firstName: "Floris"},
            ],
            assignments: [
                {id: 1, name: "W1D1-1"},
                {id: 2, name: "W1D1-2"},
                {id: 3, name: "W1D1-3"},
                {id: 4, name: "W1D4"},
                {id: 5, name: "W1D5 - Guess the Number"},
            ],
            gradings: [
                {id: 1, studentID: 1, assignmentID: 1, difficultyGrade: 3, reviewGrade: 3},
                {id: 2, studentID: 1, assignmentID: 1, difficultyGrade: 1, reviewGrade: 3},
                {id: 3, studentID: 2, assignmentID: 1, difficultyGrade: 1, reviewGrade: 4},
                {id: 4, studentID: 2, assignmentID: 2, difficultyGrade: 2, reviewGrade: 3},
                {id: 5, studentID: 3, assignmentID: 5, difficultyGrade: 3, reviewGrade: 4},
            ]
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Container;