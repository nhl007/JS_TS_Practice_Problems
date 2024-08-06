// function funcParent(msg,smg){
//     const func=()=>{
//         console.log(this);
//     }

//     console.log(msg,smg);
//     console.log(this);
//     func()
// }

// funcParent.call({
//     name:'nihal'
// })

// const hello=funcParent.bind({
//     name:'Nihal'
// },"Nihal",'ss')

// hello()

// const hof=(callBack,initial)=>{

//     const rand=Math.floor(Math.random()*100)

//  return callBack(initial+rand)
// }

// const data=hof((p)=> ++p,110)

// console.log(data);

const a = function hello(x) {
  return 5 + x;
};

function b(x) {
  return x;
}

const data = a(2);

console.log(data);

function varEX() {
  var nameVar = "var";

  return nameVar;
}

const Student = {
  collage: "abc",
  degree: "CS",
};

const stud1 = Object.create(Student);

console.log(stud1);

stud1.collage = "kk";

console.log(stud1);

console.log(Student);
