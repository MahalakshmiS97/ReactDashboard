import React from 'react'

function Navbar() {
  return (
    <>
    <form class="row g-3">
  <div class="col-md-3">
    <label class="form-label">Customer</label>
    <input type="text" class="form-control"  value="Enter Costumer Name" />
  </div>
  <div class="col-md-3">
    <label class="form-label">Invoice ID</label>
    <input type="text" class="form-control"  value="Enter Invoice ID" />
  </div>
  <div class="col-md-3">
    <label  class="form-label">Start Date</label>
    <input type="text" class="form-control"  value="Start Date" />
  </div>
  <div class="col-md-3">
    <label class="form-label">End Date</label>
    <input type="text" class="form-control" value="End Date" />
  </div>
</form>
    </>
  )
}

export default Navbar
