import React from 'react'
import Chart from 'react-apexcharts'
import './home.css'
// import { useSelector } from 'react-redux'
import StatusCard from '../../components/Status-card/StatusCard'
import Table from '../../components/table/Table'
import Badge from '../../components/badge/Badge'
import WeeklyTrending from '../../components/WeeklyTrending/WeeklyTrending'
// import Transaction from '../../components/transaction/Transaction'
// import trendingback from '../../assets/images/trending-back.png'


import box from '../../assets/images/box.png'
import cash from '../../assets/images/cash.webp'
import Trending from '../../assets/images/trending.png'
const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 52, 78, 50, 90]
    }],
    options: {
        colors: ['#4caf50'],
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}


const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }, {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }, {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status} />
        </td>
    </tr>
)

function Home() {
    // const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <div className="card full-height">
                        <p className="visitors">Today's Visitor:3620</p>
                        {/* chart */}
                        <Chart
                            options={
                                chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <StatusCard
                        count="300"
                        img={box}
                        producttype="Pure Match Pack"
                        stock="300 packs"
                        title="Total Products"
                        title2="New Product"
                        title3="Stocks"

                    />
                </div>
                <div className="col-4">
                    <StatusCard
                        title="Total Employee"
                        count="39,532"
                        img={cash}
                        producttype="Hitesh Dodiya"
                        stock=" $ 300K"
                        title2="New Employee"
                        title3="Paid"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <div className="table">
                        <div className="bill-payment"> Bill Payment</div>
                        <Table
                            headData={latestOrders.header}
                            renderHead={(item, index) => renderOrderHead(item, index)}
                            bodyData={latestOrders.body}
                            renderBody={(item, index) => renderOrderBody(item, index)} />
                    </div>
                </div>
                <div className="col-4">
                    <WeeklyTrending
                        title="Weekly Trending "
                        img={Trending}
                        heading="Matcha Frappucino"
                    />

                </div>
            </div>
        </div>
    )
}

export default Home