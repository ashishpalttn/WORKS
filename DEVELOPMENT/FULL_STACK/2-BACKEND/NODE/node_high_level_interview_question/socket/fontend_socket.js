import {io} from 'socket-io-client'

const socket = io('http://hocalhost:6100')

const Chat = () =>{

    useEffect(()=>{
        socket.on('chat message',(msg)=>{
            setMessage(msg)
        })
        return () => {
            socket.off('chat message')
        };
    })
}