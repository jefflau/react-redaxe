import React from 'react'
import { db } from 'redaxe'

export function connect(mapToProps){
  return function(Component){
    let props = mapToProps(db)
    let connectedComponent = () => {
      return <Component {...props} />
    }
    return connectedComponent
  }
}
