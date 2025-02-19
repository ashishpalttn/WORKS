import {createContext, useContext, useState} from 'react'

const CounterContext = createContext()

export const CounterProvider = ({children}) =>{
const [count, setCount] = useState();

const increment = () => setCount(count+1)
const decrement = () => setCount(count-1)

return (
    <CounterContext.Provider value={{count, increment, decrement}}>
        {children}
    </CounterContext.Provider>
)
export const CounterConsumer = CounterContext.Consumer
 export default CounterContext
}