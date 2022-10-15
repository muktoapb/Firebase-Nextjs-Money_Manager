import React, { useState } from 'react';

export default function Add() {
    const [money, setMoney] = useState({income:"",date:'',comment:''})
    console.log(money);
    return (
        <div className="add_input">
            <form action="" className='form_area'>
                <input type="number" placeholder='income'value={money?.income} onChange={(e)=>setMoney({...money, income:e.target.value})}/>
                <input type="date" name="date" id="" placeholder='date' value={money?.date} onChange={(e)=>setMoney({...money, date:e.target.value})}/>
                <textarea name="comment" placeholder='comments' value={money?.comment} onChange={(e)=>setMoney({...money, comment:e.target.value})}></textarea>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
