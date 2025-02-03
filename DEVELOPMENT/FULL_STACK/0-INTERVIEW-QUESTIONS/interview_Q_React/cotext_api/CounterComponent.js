import {useContext} from 'react';
import {CounterContext} from './CounterContext'

const Counter = ()=>{
    const {increase, decrease, value} = useContext(CounterContext)
    return (
        <div>
            <p>{value}</p>
            <button onclick={increase}></button>
            <button onclick={decrease}></button>
        </div>
    )
}

export default Counter