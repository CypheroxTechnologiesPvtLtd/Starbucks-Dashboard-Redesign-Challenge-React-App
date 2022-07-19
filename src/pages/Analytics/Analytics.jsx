import React from 'react'
// import Chart from 'react-apexcharts'
import Chart1 from '../../components/Chart/Chart'
// const chartOptions = {
//     series: [{
//         name: 'Online Customers',
//         data: [40, 70, 52, 78, 50, 90]
//     }],
//     options: {
//         colors: ['#4caf50'],
//         chart: {
//             background: 'transparent'
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth'
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
//         },
//         legend: {
//             position: 'top'
//         },
//         grid: {
//             show: false
//         }
//     }
// }

const Analytics = () => {
    return (
        <div className="main-analytics">
            <h3>Analytics</h3>
            <div className="row">
                <div className="col-6">
                    <div className="card full-height">
                        <Chart1
                            heading={'Customers'}
                            seriesdata={[{
                                name: 'Online Customers',
                                data: [90, 30, 80, 50, 70, 50]
                            }, {
                                name: 'offlines Customers',
                                data: [20, 85, 40, 75, 60, 90]
                            }]}
                            colors={['#4caf50', '#349eff']}
                            xaxiscategories={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                            height='300px'
                        />
                    </div>
                </div>
                <div className="col-6">
                    <Chart1
                        heading={'Visitors '}
                        seriesdata={[{
                            name: 'Online Customers',
                            data: [1000, 1200, 800, 1256, 788, 1600]
                        }]}
                        colors={['#4caf50', '#349eff']}
                        xaxiscategories={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                        height='300px'
                    />
                </div>
            </div>
            <div>
                <div className="row">

                    <div className="col-6 p-3">
                        <Chart1
                            heading={'Products '}
                            seriesdata={[{
                                name: 'Online Customers',
                                data: [1000, 1200, 800, 1256, 788, 1600]
                            }]}
                            colors={['#ff4a6b', '#349eff']}
                            xaxiscategories={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                            height='300px'
                        />
                    </div>
                    <div className="col-6 p-3">
                        <div className="card full-height">
                            <Chart1
                                heading={'New Customers'}
                                seriesdata={[{
                                    name: 'new Customers',
                                    data: [9000, 10000, 11880, 12850, 13750, 15550]
                                }]}
                                colors={['#4caf50', '#349eff']}
                                xaxiscategories={['Jan', 'Feb', 'Mar', 'Apr', 'May']}
                                height='300px'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics