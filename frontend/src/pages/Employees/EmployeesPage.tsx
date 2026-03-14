import React from 'react'
import {Link} from "react-router-dom"
function EmployeesPage() {
  return (
    <>
        <div>EmployeesPage</div>
        <Link to="/employees/new">NEW EMPLOYEE</Link>
    </>
  )
}

export default EmployeesPage