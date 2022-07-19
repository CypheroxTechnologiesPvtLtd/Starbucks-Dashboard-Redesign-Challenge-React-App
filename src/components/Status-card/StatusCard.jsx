import React from 'react'
import './statuscard.css'

const StatusCard = (props) => {
    return (
        <div className='status-card'>
            <div className='card-top'>
                <div className='total-ptoduct'>
                    <p className='product'>{props.title}</p>
                    <p className="product-count">{props.count}</p>
                </div>
                <div className='staus-card__icon'>
                    <img src={props.img} alt="product" />
                </div>
            </div>
            <hr />
            <div className="status-card__info">
                <div className="status-card__info__inner">
                    <p>{props.title2}</p><p className="product-type">:  {props.producttype}</p>
                </div>
                <span> {props.title3}:{props.stock}</span>
            </div>
        </div >
    )
}

export default StatusCard