import React from 'react'

const WithProductList = (WrappedComponent, cardsarray) => {
  return () => {
    return <WrappedComponent cardsarray={cardsarray}/>
  }
}

export default WithProductList