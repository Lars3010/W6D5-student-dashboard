import React from 'react';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryAxis} from 'victory';
import wincTheme from '../chartThemes';
import Filter from './Filter';

function Chart(props){

    let graph = <VictoryGroup offset={20}>
        <VictoryBar
            data={props.graphData}
            x="assignmentName"
            y="difficultyGrade"
            tickValues={[1,2,3,4,5,6]}
            tickFormat={props.graphData.map(item => item.assignmentName)}
        />
        <VictoryBar
            data={props.graphData}
            x="assignmentName"
            y="reviewGrade"
            tickValues={[1,2,3,4,5,6]}
            tickFormat={props.graphData.map(item => item.assignmentName)}
        />
    </VictoryGroup>

    console.log(props.radioState);
    if(props.graphData.length > 0 && props.radioState){
        if(props.radioState.difficulty === true && props.radioState.review === true){
            console.log('both', props.graphData[0].difficultyGrade, props.graphData[0].reviewGrade);
            graph = <VictoryGroup offset={20}>
            <VictoryBar
                data={props.graphData}
                x="assignmentName"
                y="difficultyGrade"
                tickValues={[1,2,3,4,5,6]}
                tickFormat={props.graphData.map(item => item.assignmentName)}
            />
            <VictoryBar
                data={props.graphData}
                x="assignmentName"
                y="reviewGrade"
                tickValues={[1,2,3,4,5,6]}
                tickFormat={props.graphData.map(item => item.assignmentName)}
            />
        </VictoryGroup>
        } else if(props.radioState.difficulty === true && props.radioState.review === false){
            console.log('difficulty', props.graphData[0].difficultyGrade);
            graph = <VictoryGroup offset={20}>
                <VictoryBar
                    data={props.graphData}
                    x="assignmentName"
                    y="difficultyGrade"
                    tickValues={[1,2,3,4,5,6]}
                    tickFormat={props.graphData.map(item => item.assignmentName)}
                />
            </VictoryGroup>
        } else if(props.radioState.difficulty === false && props.radioState.review === true){
            console.log('review', props.graphData[0].reviewGrade);  
            graph = <VictoryGroup offset={20}>
            <VictoryBar
                data={props.graphData}
                x="assignmentName"
                y="reviewGrade"
                tickValues={[1,2,3,4,5,6]}
                tickFormat={props.graphData.map(item => item.assignmentName)}
            />
        </VictoryGroup>
        }
    }

    return(
        <React.Fragment>
        <VictoryChart domainPadding={25} theme={wincTheme}>
                {graph}
                <VictoryAxis
                    tickFormat={props.graphData.map(item => item.assignmentName)}
                />
                <VictoryAxis
                    dependentAxis
                    tickValues={[1,2,3,4,5]}
                />
            </VictoryChart>
            <Filter handleFilterChange={props.handleFilterChange}/>
        </React.Fragment>
    )
}

export default Chart;