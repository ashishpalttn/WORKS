import {io} from 'socket-io-client'

const socket = io('http://hocalhost:6100')

const Chat = () =>{
    const [message, setMessage] = useState()
    const [input, setInput] = useState()


    useEffect(()=>{
        socket.on('chat message',(msg)=>{
            setMessage(msg)
        })
        return () => {
            socket.off('chat message')
        };
    })

    const sendMessage = () =>{
        socket.emit('input')
        setMessage('')
    }
    useEffect(()=>{
        sendMessage
    },[input])

    return(
        <div>
            <p>{message}</p>)
            <input
            value = {input}
            onChange={(e)=>setInput(e.target.value)}
            />
        </div>

    )
}