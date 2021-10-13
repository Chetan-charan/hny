
const message = new Promise( (resolve,reject) => {
   resolve(document.querySelector('.msg'));
});

message.then((value) =>{
setTimeout(() => { value.innerText-=1; },1000);
let n = 1;
return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText-=1; },1000*n);
    return [value,n+1];
})
.then(([value,n]) => {
    setTimeout(() => { value.innerText='Happy New year!!'; },1000*n);   
});






























