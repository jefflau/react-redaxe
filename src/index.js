import React from 'react'

export function connect(Component){
  return function(mapToProps){
    let connectedComponent = () => {
      return <div>{component}</div>
    return <Component {...mapToProps} />
  }
}
