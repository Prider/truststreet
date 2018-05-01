import React from 'react'
import Icon from './Icon'
import WatchVideo from './WatchVideo'

const HeaderCoverage = ({ title }) => {
  return (
    <div className="header-coverage">
      <Icon title={title} />
      <div className="title">
        {title}
        <WatchVideo />
      </div>
    </div>
  )
}

export default HeaderCoverage
