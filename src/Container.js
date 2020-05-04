import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Chart from './components/Chart';
import Header from './components/Header';
import Filter from './components/Filter';
import Student from './components/Student';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            students: [
                {id: 1, firstName: "Evelyn"},
                {id: 2, firstName: "Aranka"},
                {id: 3, firstName: "Floris"},
                {id: 4, firstName: "Hector"},
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
                {id: 6, studentID: 4, assignmentID: 5, difficultyGrade: 2, reviewGrade: 3},
                {id: 7, studentID: 4, assignmentID: 4, difficultyGrade: 4, reviewGrade: 5},
                {id: 8, studentID: 4, assignmentID: 3, difficultyGrade: 1, reviewGrade: 2},
            ],
            graphData: []
        }
    }

    getGradesFromStudent = (id) => {
        const state = {...this.state};
        const studentID = parseInt(id);
        const fromStudent = state.gradings.filter(item => {
            return item.studentID === studentID
        });
        const grades = fromStudent.map(item => {
            const assignmentName = this.getAssignmentName(item.assignmentID);
            return {assignmentName:assignmentName, difficultyGrade: item.difficultyGrade, reviewGrade:item.reviewGrade}
        });
        return grades
    }

    getStudentInfo = (id) => {
        const state = [...this.state.students];
        const studentID = parseInt(id);
        const student = state.filter(student => {
            return student.id === studentID
        });
        console.log('student', student);
        
        return student;
    }

    /**
     * Function that returns an average from an array of numbers
     * @param {array} score array of numbers
     */
    getAverage = (score) => {
        return (score.reduce((prevValue, currentValue) => currentValue + prevValue)) / score.length;
    }

    /**
     * Function that returns the name from an assignment by id
     * @param {number} assignmentID id of the assignment
     */
    getAssignmentName = (assignmentID) => {
        const state = [...this.state.assignments];
        const name = state.find(assignment => assignment.id === assignmentID);
        return name.name
    }

    /**
     * Function that returns all assignments that match the wanted assignment by id
     * @param {number} assignmentID id of the assignment
     */
    getDataFromSingleAssignment = (assignmentID) => {
        const state = [...this.state.gradings];
        const single = state.filter(item => {
            return item.assignmentID === assignmentID
        });
        return single;
    }

    /**
     * Function that seperates grades from the gradingsobject
     * @param {Object} grades single object from gradings state
     * @param {number} grades.difficultyGrade given grade for assignment difficulty
     * @param {number} grades.reviewGrade review of the assignment
     */
    getGrades = (grades) => {
        const difficultyGrades = [];
        const reviewGrades = [];
        grades.forEach(item => {
            difficultyGrades.push(item.difficultyGrade);
            reviewGrades.push(item.reviewGrade);
        })
        return {difficultyGrades, reviewGrades}
    }

    /**
     * Function that tries to set the average and return nested array or return empty array
     * @param {array} difficultyGrades Array with grades for difficulty
     * @param {array} reviewGrades Array with review grades
     */
    setCombinedAverage = (data) => {
        const combinedAvgGrades = [];
        try {
            const averageDifficultyGrade = this.getAverage(data.difficultyGrades);
            const averageReviewGrade = this.getAverage(data.reviewGrades);
            combinedAvgGrades.push(averageDifficultyGrade, averageReviewGrade);
        } finally {
            return combinedAvgGrades;
        }
    }

    /**
     * Function that gets the average grades from all assignments. returns object with assignment name, difficulty grade and review grade
     */
    getAverageFromAllAssignments = () => {
        //Wanted result: {assignmentName: "W1D1-1", avgDifficultyGrade: 4, AvgReviewGrade: 1}
        const state = {...this.state};
        const names = [];
        
        const data = state.gradings.map((item) => {
            const name = this.getAssignmentName(item.assignmentID);
            if(!names.includes(name)){
                names.push(name);
            }
            const singleAssignment = this.getDataFromSingleAssignment(item.id);
            let grades;
            if (singleAssignment.length > 0){
                grades = this.getGrades(singleAssignment);
            }
            const combinedAvgGrades = this.setCombinedAverage(grades);
            return combinedAvgGrades
        })

        const filteredData = data.filter(item => {
            return item.length > 0 && item !== undefined
        })

        const averageData = filteredData.map((data, index) => {
            return {assignmentName: names[index], difficultyGrade: data[0], reviewGrade: data[1]}
        })
        return averageData;
    }

    setAverageFromAll = () => {
        const data = this.getAverageFromAllAssignments();
        this.setState({
            graphData: data
        });
    }

    componentDidMount(){
        console.log('mount');
        this.getGradesFromStudent(4);
        this.setAverageFromAll()
    }

    componentDidUpdate(){
        console.log('update');
        
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header students={this.state.students} handlechange={this.studentSelectHandleChange}/>
                    <Switch>
                        <Route exact path="/" render={props => <Chart graphData={this.state.graphData}/> }/>
                        <Route path="/:id" render={props => <Student {...props}studentInfo={this.getStudentInfo(props.match.params.id)} data={this.getGradesFromStudent(props.match.params.id)}/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Container;