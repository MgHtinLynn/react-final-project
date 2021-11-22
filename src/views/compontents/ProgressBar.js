import React from "react"
import PropTypes from "prop-types"

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className='h-2 w-full bg-gray-300 rounded overflow-hidden'>
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-full bg-green-600">
      </div>
    </div>
  )
}

export default ProgressBar

ProgressBar.propTypes = {
  progressPercentage: PropTypes.number.isRequired
}
