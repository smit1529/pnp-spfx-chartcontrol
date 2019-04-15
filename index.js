import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    // set the data
    const data = {
      labels:
        [
          'January', 'February', 'March', 'April', 'May', 'June', 'July'
        ],
      datasets: [
        {
          label: 'My First Dataset',
          data:
            [
              65, 59, 80, 81, 56, 55, 40
            ]
        }
      ]
    };

    // set the options
    const options = {
      legend: {
        display: true,
        position: "left"
      },
      title: {
        display: true,
        text: "My First Donut"
      }
    };

    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>

        <ChartControl type={ChartType.Doughnut} data={data} options={options} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
