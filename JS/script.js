// let a=document.querySelectorAll("div");
// console.log(a);

// a[0].innerText="new 1";
// a[1].innerText="new 2";
// a[2].innerText="new 3"


let b=document.querySelectorAll("div");

let i=1;

for(let div of b){
    div.innerText=`new ${i}`;
    i++;
}
