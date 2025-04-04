import Counter from "./CounterComponent"
import { CounterProvider } from "./CounterContext"

export const App = ()=>{
    return (
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )
}