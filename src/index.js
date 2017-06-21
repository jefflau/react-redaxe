import React from 'react'
import { db } from 'redaxe'

export function connect(mapToProps){
  return function(Component){
    let connectedComponent = () => {
      let props = mapToProps(db)
      return <Component {...props} />
    }
    return connectedComponent
  }
}
