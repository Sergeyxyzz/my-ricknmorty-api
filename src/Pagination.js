import React from 'react'

const Pagination = ({createPages}) => {
  return (
    <div>{createPages()}</div>
  )
}

export default Pagination