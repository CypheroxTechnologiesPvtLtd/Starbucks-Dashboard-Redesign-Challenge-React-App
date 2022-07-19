import React from 'react'
import './weeklytrending.css'
import Transaction from '../../components/transaction/Transaction'
// import trendingback from '../../assets/images/trending-back.png'

const WeeklyTrending = (props) => {
    return (
        <div className="main-div">
            <div className="header">
                <p>{props.title}</p>
                <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
            <div className="img-outer">
                <div className="img-div">
                    s
                    <img src={props.img} alt="img" />
                </div>
                <p>{props.heading}</p>
            </div>
            <div className="transactions">
                <Transaction
                    heading="Number of Trabsaction"
                    count={"$150K"}
                    icon="bx-trending-down"
                    percentage="35"
                    background={`#FBCCCC`}
                    color="red"
                />
                <Transaction
                    heading="Volume (in USD)"
                    count={"$250K"}
                    icon="bx-trending-up"
                    percentage="65"
                    background={`#D7F2E7`}
                    color="green"
                />
            </div>

        </div>
    )
}

export default WeeklyTrending