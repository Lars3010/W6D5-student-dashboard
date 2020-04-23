import React from 'react';
import {VictoryBar, VictoryChart, VictoryGroup, VictoryAxis} from 'victory';

class Chart extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.averageData);
    }

    render(){
        return(
            <VictoryChart>
                <VictoryBar/>
            </VictoryChart>
        )
    }
}

export default Chart;