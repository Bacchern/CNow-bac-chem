import React from 'react'
import Text from './Text'
import Pots from './Pots'
import "./style.scss"

export default function ContentDental() {
  return (
    <div className='contentdental'>
      <div className='container'>
        <div className='contentdental-main'>
          <Text />
          <Pots />
        </div>
      </div>
    </div>
  )
}
