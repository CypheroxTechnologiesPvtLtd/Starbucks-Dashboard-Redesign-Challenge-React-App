import React from 'react'
import './transaction.css'

const Transaction = (props) => {
    return (
        <div className="transaction-main">
            <div className="transaction-header">
                <p>{props.heading}</p>
            </div>
            <div className="transaction-bottom">
                <div className="transaction-count">
                    <p>{props.count}</p>
                </div>
                <div className="transaction-status" style={{ background: `${props.background}`, color: `${props.color}` }}>
                    <div className="transaction-icon">
                        <i class={`bx ${props.icon}`}></i>
                    </div>
                    <div className="transaction-percentage" >
                        <p style={{ color: `${props.color}` }}>{props.percentage}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction