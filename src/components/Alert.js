import React from 'react'

function Alert({alert}) {
  return (
    alert &&<div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{alert.type}</strong>: {alert.msg}
    </div>
  )
}

export default Alert