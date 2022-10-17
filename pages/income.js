import React from 'react'
import IncomeList from '../components/Money/IncomeList'
import IncomePopup from '../components/Money/IncomePopup'

export default function Income({allIncome}) {
  return (
    <div className="page_data">
      <div className="popupinput">
        <IncomePopup/>
      </div>
      <div className="income_list">
        <IncomeList allIncome={allIncome}/>
      </div>
    </div>
  )
}
