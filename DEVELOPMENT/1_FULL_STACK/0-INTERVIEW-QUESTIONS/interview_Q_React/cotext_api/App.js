import Counter from "./CounterComponent"
import { CounterProvider } from "./CounterContext"

const App = ()=>{
    return (
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    )
}