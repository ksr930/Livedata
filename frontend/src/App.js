import React from 'react'
import socketioclient from 'socket.io-client';
import {
    BarChart,Bar,Line,LineChart,XAxis,YAxis,Tooltip
} from  'recharts'

class App extends React.Component{
        
constructor(props) {
    super(props)

    
    this.state = {
       d:[]
    }
   
}
componentDidMount = () => {
 const socket = socketioclient("localhost:5000");
 

 socket.on("newdata", (data) => {
    console.log(data)
   this.setState({d:data})


 });
   
}


    render(){
        return (
          <div style={{ textAlign: "center" }}>
            <h1>LIVE DATA</h1>
            <LineChart
              style={{ marginLeft: "30%", marginTop: "5%" }}
              width={600}
              height={300}
              data={this.state.d}
            >
              <XAxis dataKey="time" />
              <YAxis dataKey="stock_price" />

              <Line type="monotone" dataKey="stock_price" stroke="#8884d8" />
            </LineChart>

            {this.state.d.map((data) => (
              <div className='mt-3'>
                <div className="card bg-light">
                  <h1>DATE:= {data.time}</h1>
                  <h2>PRICE:= {data.stock_price}</h2>
                </div>
              </div>
            ))}
          </div>
        );
    }
    
}

export default App;