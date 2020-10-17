import React, {useState} from 'react';

import axios from 'axios';
import Pie from 'react-chartjs-2';



function HomePage() {
    const [ currentState, setState ] = useState({});
    var dataSource = {
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#c12200',
                    '#000cc1',
                    '#00c11e',
                    '#5e3a0c'
                ],
            }
        ],
        labels: []
    };


    axios.get('http://localhost:3000/budget')
    .then(function (res) {
        console.log(res.data);
            dataSource.datasets[0].data = res.data.budget;
            dataSource.labels = res.data.title;
        setState(dataSource);
    });


  return (
    <div className="center" id="main">

        <div className="page-area">

            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    working on getting it to update
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </div>
    
            <div className="text-box">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </div>
    
            <div className="text-box">
                <h1>Free</h1>
                <p>
                    <Pie data={currentState} width={400} height={400}></Pie>
                </p>
            </div>

        </div>

    </div>
  );
}

export default HomePage;
