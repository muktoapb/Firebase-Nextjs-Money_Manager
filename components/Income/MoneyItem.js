import React from 'react'

export default function MoneyItem({date, amount,text}) {
  return (
    <div className="money_item">
        <p>{date} - {amount} - {text}</p>
        
    </div>
  )
}
