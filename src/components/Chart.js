import React from 'react';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryAxis, VictoryLabel, VictoryTooltip} from 'victory';
import wincTheme from '../chartThemes';
import Filter from './Filter';

const CustomTickLabel = props => {
    return <VictoryLabel {...props} />;
};

function Chart(props){
    const graphDataWithLabels = props.graphData.map(item => {
        return {...item, label: item.assignmentName}
    })

    let graph = <VictoryGroup offset={4}>
        <VictoryBar
            data={graphDataWithLabels}
            x="assignmentName"
            y="difficultyGrade"
            tickValues={[1,2,3,4,5]}
            tickFormat={props.graphData.map(item => item.assignmentName)}
            labelComponent={<VictoryTooltip/>}
        />
        <VictoryBar
            data={graphDataWithLabels}
            x="assignmentName"
            y="reviewGrade"
            tickValues={[1,2,3,4,5]}
            tickFormat={props.graphData.map(item => item.assignmentName)}
            labelComponent={<VictoryTooltip/>}
        />
    </VictoryGroup>

    if(props.graphData.length > 0 && props.radioState){
        if(props.radioState.difficulty === true && props.radioState.review === true){
            graph = <VictoryGroup offset={4} >
            <VictoryBar
                data={graphDataWithLabels}
                x="assignmentName"
                y="difficultyGrade"
                tickValues={[1,2,3,4,5]}
                tickFormat={props.graphData.map(item => item.assignmentName)}
                labelComponent={<VictoryTooltip/>}
            />
            <VictoryBar
                data={graphDataWithLabels}
                x="assignmentName"
                y="reviewGrade"
                tickValues={[1,2,3,4,5]}
                tickFormat={props.graphData.map(item => item.assignmentName)}
                labelComponent={<VictoryTooltip/>}
            />
        </VictoryGroup>
        } else if(props.radioState.difficulty === true && props.radioState.review === false){
            graph = <VictoryGroup offset={4}>
                <VictoryBar
                    data={graphDataWithLabels}
                    x="assignmentName"
                    y="difficultyGrade"
                    tickValues={[1,2,3,4,5]}
                    tickFormat={props.graphData.map(item => item.assignmentName)}
                    labelComponent={<VictoryTooltip/>}
                />
            </VictoryGroup>
        } else if(props.radioState.difficulty === false && props.radioState.review === true){ 
            graph = <VictoryGroup offset={4}>
            <VictoryBar
                data={graphDataWithLabels}
                x="assignmentName"
                y="reviewGrade"
                tickValues={[1,2,3,4,5]}
                tickFormat={props.graphData.map(item => item.assignmentName)}
                labelComponent={<VictoryTooltip/>}
            />
        </VictoryGroup>
        }
    }

    return(
        <div className="chart-container">
        <VictoryChart domainPadding={25} theme={wincTheme} padding={{ top: 5, bottom: 80, right: 20, left: 20 }}>
                {graph}
                <VictoryAxis
                    tickLabelComponent={<CustomTickLabel angle={45} textAnchor={"start"}/>}
                    tickFormat={props.graphData.map(item => item.assignmentName)}
                />
                <VictoryAxis
                    dependentAxis
                    tickValues={[1,2,3,4,5]}
                   
                />
            </VictoryChart>
            <Filter handleFilterChange={props.handleFilterChange}/>
        </div>
    )
}

export default Chart;