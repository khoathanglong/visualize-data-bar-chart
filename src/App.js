import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={data:[],option:[]}
  }
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    .then(res=>res.json())
    .then(res=>{
      console.log(res.data)
      let amount=res.data.map(each=>each[1]);
      let dataLabel=res.data.map(each=>each[0].substring(0,7));
      let data={
        labels:dataLabel,
        datasets:[{
          data:amount,
          label:'Gross Domestic Product',
          backgroundColor: '#66B032',
          borderColor: '#66B032',
      
        }]
      };
      let options={
        title:{
          display:true,
          text:"Units: Billions of Dollars Seasonal Adjustment: Seasonally Adjusted Annual Rate Notes: A Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)",
          position:"bottom",
          fontColor:'black',
          fontSize:10
        },
        legend: {
            labels: {
                fontColor: "black",
                fontSize: 12,
          }
        },
        scales:{
          xAxes:
          [
            {
              barPercentage:1,
              barThickness:5,
              type:"time",
              time:{displayFormats:{years:"YYYY"}},
              gridLines:{
                display:false,
              },
               ticks:{
                display:true,
                fontColor:"black"
              }
            }
          ],
          yAxes:
          [
            {
              gridLines:{
                display:true,
                drawBorder:true,
                color:'lightgrey',
                drawTicks:true
              },
              scaleLabel:{
                display:true,
                labelString:"Gross Domestic Product, USA",
                fontColor:'black',

              },
              ticks:{
                display:true,
                fontColor:"black",
              }
            }
          ]
        }
      }
      this.setState({data,options})
    })
  }
  render() {

    return (
      <div className="App" style={{width:'80%',margin:'20px auto',backgroundColor:'#EBF7E3'}}>
        <Bar data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default App;
