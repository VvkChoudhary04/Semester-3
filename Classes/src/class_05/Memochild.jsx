import React, {memo}from 'react'

const Memochild = () => {
    console.log("hii");
  return (
    <div>Memochild</div>
  )
}

export default memo(Memochild)
