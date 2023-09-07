import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { createIncreaseAction,createDecreaseAction,createIncreaseAsyncAction } from '@/store/actions/count'
const Archive = (props)=>{
    const increase=()=>{
        props.jia(1)
    }
    const decrease=()=>{
        props.jian(1)
    }
    const increaseAsync=()=>{
        props.jiaAsync(1,1000)
    }
  return (
    <div>
        Count:{props.count}
        <Button type="primary" onClick={increase}>加1</Button>
        <Button type="primary" onClick={decrease}>减1</Button>
        <Button type="primary" onClick={increaseAsync}>异步加1</Button>
    </div>
  )
}
export default connect(
    state=>({count:state.count}),
    {
        jia:createIncreaseAction,
        jian:createDecreaseAction,
        jiaAsync:createIncreaseAsyncAction,
    }
)(Archive)