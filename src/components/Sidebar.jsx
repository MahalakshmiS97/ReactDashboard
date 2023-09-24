import React from 'react'
import sms from './images/sms.png'
import appointment from './images/appointment.png'
import labtest from './images/labtest.png'
import order from './images/order.png'
import payment from './images/payment.png'
import setting from './images/setting.png'
import dash from './images/dashboard.png'
import active from './images/Active.png'


function Sidebar() {
  return (
    <>
 <div className="d-flex" id="wrapper">
         
            <div className= "bg-white" id="sidebar-wrapper">
                <div className="sidebar-heading">Medico Sales</div>
                <div className="list-group list-group-flush">
                
                <div className="list-group-item-light p-3 dashboard" ><img className="dash" src={active}/><img className="dash" src={dash}/>Dashboard</div>
                <div className="list-group-item-light p-3" ><img className="lab" src={labtest}/>Lab Test</div>
                    <div className="list-group-item-light p-3" ><img className="appointment" src={appointment}/>Appointments</div>
                    <div className="  list-group-item-light p-3"><img className="order" src={order}/>Medicine Order</div>
                    <div className="  list-group-item-light p-3" ><img className="sms" src={sms}/>Message</div>
                    <div className="  list-group-item-light p-3" ><img className="payment" src={payment}/>Payment</div>
                    <div className="  list-group-item-light p-3" ><img className="setting" src={setting}/>Settings</div>
                </div>
                <div className="sidebar-footer"><i class="fa-regular fa-circle-question help"></i>Help</div>
            </div>
            </div>
    </>
  )
}

export default Sidebar
