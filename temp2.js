const p1 = new Promise((res, rej)=> setTimeout(()=>res('one'),500))
const p2 = new Promise((res, rej)=>setTimeout(()=>res('two'),1000))
const p3 = new Promise((res, rej)=>res('three'))
// const p4 = new Promise((res, rej)=>rej('rejected'))

Promise.all([p1,p2]).then((res)=>console.log(res))
                    .catch((e)=>console.log(e))


const fetchData = () =>{
    try{
        Promise.all[
            fetch('').then(res=>res.json)
        ]
    }
}