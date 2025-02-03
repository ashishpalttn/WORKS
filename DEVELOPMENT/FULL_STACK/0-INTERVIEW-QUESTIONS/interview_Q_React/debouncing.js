
function useDebouncing(value, delay){
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            setDebouncedValue(value)
        },delay)

        return ()=>clearTimeout(timeoutId)
    },[debouncedValue])
    return debouncedValue
}

export default useDebouncing