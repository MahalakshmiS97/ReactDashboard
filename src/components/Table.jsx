import React from 'react'

function Table() {
    let data = [{
        check:"",
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    },
    {
        InvoiceID:"#AHGA68",
        Date:"23/09/2022",
        customer:"Jacob Marcus",
        payableamount:"$100",
        paidamount:"$000",
        due:"$000"
    }
]
    
  return (
    <>
      <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value=""/>
</div>
</th>
      <th scope="col">Invoice ID</th>
      <th scope="col">Date</th>
      <th scope="col">Customer</th>
      <th scope="col">Payable Amount</th>
      <th scope="col">Paid Amount</th>
      <th scope="col">Due</th>
    </tr>
  </thead>
  <tbody>
    {data.map((e,i)=>{
        return<tr>
            <td scope="col">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""/>
            </div>
            </td>
            <td style={{color:"#0B63F8"}}>{e.InvoiceID}</td>
            <td>{e.Date}</td>
            <td>{e.customer}</td>
            <td>{e.payableamount}</td>
            <td>{e.paidamount}</td>
            <td>{e.due}</td>
            </tr>
        
    })}
  </tbody>
</table>
    </>
  )
}

export default Table
