const arr = [{id:1,name:"ashish"},{id:2,name:"pal"}, {id:5,name:"paul"}];
const arr2 = [{parentId:1,designation:"trainee"},{parentId:2,designation:"software"}, {parentId:4,designation:"tester"}];

const outerJoin = new Map()

arr.forEach(item=>{
    outerJoin.set(item.id, {...item,designation:null})
})
arr2.forEach(item=>{
    if(outerJoin.has(item.parentId)){
        outerJoin.set(item.parentId, {...outerJoin.get(item.parentId), designation:item.designation})
    }
    else{
        outerJoin.set(item.parentId, {id:null, name:null, designation:item.designation})
    }
})

console.log(Array.from(outerJoin.values()))

//output
// [
//     { id: 1, name: 'ashish', designation: 'trainee' },
//     { id: 2, name: 'pal', designation: 'software' },
//     { id: 5, name: 'paul', designation: null },
//     { id: null, name: null, designation: 'tester' }
//   ]