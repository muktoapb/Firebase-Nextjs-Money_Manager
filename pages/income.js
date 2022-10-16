import React from 'react'
import IncomeList from '../components/Income/IncomeList'
import IncomePopup from '../components/Income/IncomePopup'

export default function Income() {
  return (
    <div className="page_data">
      <div className="popupinput">
        <IncomePopup/>
      </div>
      <div className="income_list">
        <IncomeList/>
      </div>
    </div>
  )
}
