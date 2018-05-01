import React from 'react'
import styled from 'styled-components'

const Icon = ({ title }) => {
  const iconName = getConcernIconByTitle(title)
  const iconPath = require('./../../../../assets/images/icon/' + iconName)

  const ItemContent = styled.div`
    background-color: #00008f !important;
    background: url(${iconPath}) no-repeat center/100%;
    border-radius: 50%;
    margin-bottom: 10px;
    float: left;
  `
  return <ItemContent className="gender__icon" />
}

export default Icon

export const getConcernIconByTitle = title => {
  switch (title) {
    case 'Protection':
      return 'ic_protection.svg'
    case 'Health':
      return 'ic_health.svg'
    case 'Education':
      return 'ic_education.svg'
    case 'Retirement':
      return 'ic_retirement.svg'
    case 'Legacy':
      return 'ic_legacy.svg'
  }
}
