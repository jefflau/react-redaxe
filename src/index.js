import React, { PureComponent } from 'react'
import { db } from 'redaxe'

export function connect(mapToProps){
  return function(Component){
    class ShouldUpdateComponent extends PureComponent {
      render(){
        let props = this.props
        return <Component {...props} />
      }
    }
    let ConnectedComponent = () => {
      let props = mapToProps(db)
      return <ShouldUpdateComponent {...props}/>
    }
    return ConnectedComponent
  }
}
