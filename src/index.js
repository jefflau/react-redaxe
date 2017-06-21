import React from 'react'

export function connect(mapToProps){
  return function(Component){
    let connectedComponent = () => {
      return <Component {...mapToProps} />
    }
    return connectedComponent
  }
}
