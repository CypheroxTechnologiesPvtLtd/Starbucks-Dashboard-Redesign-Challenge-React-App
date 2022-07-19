import React from 'react'
import Chart from 'react-apexcharts'
import './chart.css'

const Chart1 = ({ heading, seriesdata, colors, xaxiscategories, height }) => {
    const chartOptions = {
        series: seriesdata,
        options: {
            colors: colors,
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: xaxiscategories
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }
    return (
        <div className="card full-height">
            <div className="card-heading">{heading}</div>
            <Chart
                options={chartOptions.options}
                series={seriesdata}
                type='line'
                height={height}
            />
        </div>
    )
}

export default Chart1