import React, {Component} from "react";
import { Line, Bar, Radar } from "react-chartjs-2";
import { Row, Col } from 'react-materialize'
import "./LogsView.css"


// Chart component
class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData1:this.props.chartData1,
      chartData2:this.props.chartData2,
      chartData3:this.props.chartData3,
      chartData4:this.props.chartData4,
      chartData5:this.props.chartData5,
      chartData6:this.props.chartData6
    }
  }

  getGraph = (chartData1, chartData2, chartData3, chartData4, chartData5, chartData6) => {
    this.setState({
      chartData1: chartData1,
      chartData2: chartData2,
      chartData3: chartData3,
      chartData4: chartData4,
      chartData5: chartData5,
      chartData6: chartData6
    })
  }


  render(){
      return(
        <Row>
        <Col m={10} offset="m1">
        <div className="chart">
          <Line
            data={this.props.chartData1}
            options={{
              title:{
                display: true,
                text:"Signal Strength Graph",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }

            }}
          />

          <br />
          <br />
          

          <Line
            data={this.props.chartData5}
            options={{
              title:{
                display: true,
                text:"Data Rate Graph",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }

            }}
          />

          <br />   
          <br />
                 

          <Bar
            data={this.props.chartData2}
            options={{
              title:{
                display: true,
                text:"Usage Graph",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }
            }}
          />
          <br />
          <br />
          
          

          <Line
            data={this.props.chartData3}
            options={{
              title:{
                display: true,
                text:"Altitude",
                fontSize: 25
              },
              legend:{
                display: true,
                position: 'bottom'
              }
            }}
          />
          <br />
          <br />
          
          


        <Radar
          data={this.props.chartData4}
          options={{
            title:{
              display: true,
              text:"Round Trip Time",
              fontSize: 25
            },
            legend:{
              display: true,
              position: 'bottom'
            },
            xAxes: [{
              type: 'time',
              ticks: {
                autoSkip: true,
                maxTicksLimit: 20
              }
            }]
          }}
        />

          <br />
          <br />
          
        

      <Line
        data={this.props.chartData6}
        options={{
          title:{
            display: true,
            text:"Number of Aircraft",
            fontSize: 25
          },
          legend:{
            display: true,
            position: 'bottom'
          },

        }}
      />
          <br />
          

      </div>
      </Col>
      </Row>

      )
    }
}
// End Chart component

export default Chart;
