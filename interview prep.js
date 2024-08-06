// function closureFunc(msg){
//     const data="This is closure data!"
//     function inner (msg){
//       return data+msg
//     }

//     return inner(msg)
// }

// const data=closureFunc("hello")

// console.log(data);

// const ParentFunc=(msg)=>{
//     return ()=>{
//         console.log(msg)
//     }
// }

// const children=ParentFunc("hello")

// children()

// const data={
//     name:"nihal",
//     age:26,
//     profession:{
//         name:"Software development",
//         experience:3
//     }
// }

// const newdata={...data,name:'Jake',age:24,profession:{
//     ...data.profession,name:'Business Man',experience:6
// }}

// console.log(newdata);

const arr = [
  {
    name: "nihal",
    age: 26,
  },
  {
    name: "Jake",
    age: 32,
  },
];

// const newArr=arr.map(d=>{
//     if(d.name==='Jake') return {...d,name:'Jose'}
//     else return d
// })

const newArr = [...arr.slice(0, 1), { name: "Jose", age: 40 }, arr.slice(1)];

console.log(newArr);
