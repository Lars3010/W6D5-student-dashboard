import React from 'react';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryAxis} from 'victory';
import wincTheme from '../chartThemes'

function Chart(props){
    return(
        <VictoryChart domainPadding={25} theme={wincTheme}>
                <VictoryGroup offset={20}>
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
                <VictoryAxis
                    tickFormat={props.graphData.map(item => item.assignmentName)}
                />
                <VictoryAxis
                    dependentAxis
                    tickValues={[1,2,3,4,5]}
                />
            </VictoryChart>
    )
}

export default Chart;