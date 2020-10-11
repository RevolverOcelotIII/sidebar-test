import React, { useEffect } from 'react'
import Chart from 'chart.js'
function generate (){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            layout:{
                top:50
            }
        }
    });
}
function Home() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Blue', 'Orange', 'Yellow'],
                datasets: [
                    {
                        label: "Blue",
                        backgroundColor: "blue",
                        data: [3,7,4]
                    },
                    {
                        label: "Orange",
                        backgroundColor: "red",
                        data: [4,3,5]
                    },
                    {
                        label: "Yellow",
                        backgroundColor: "green",
                        data: [7,2,6]
                    },
                    {
                        label: "Yellow",
                        backgroundColor: "green",
                        data: [10,1,2]
                    },
                ]
            },
            options: {
                layout:{
                    top:50
                }
            }
        });
        //myChart.toBase64Image
        
    },[])
    const styles = {
        position:'relative',
        height:'300px',
        width: '50%',
        paddingLeft:'100px'
    }
    return (
        <div style = {styles}>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    )
}

export default Home
