const object = document.querySelector ('#object');
const arena = document.querySelector ('#arena');
const btnUp = document.querySelector ('#btnUp');
const btnDown = document.querySelector ('#btnDown');
const sizeArena = arena.getBoundingClientRect();
const btnRight = document.querySelector('#btnRight')
const btnLeft = document.querySelector('#btnLeft')

btnUp.addEventListener('click', ()=>{
    let sizeObject = object.getBoundingClientRect();
    if(sizeObject.top <= sizeArena.top){
        alert('Mentok Atas');
    }else{
        object.style.top = object.offsetTop-5+"px"
    }
});
btnDown.addEventListener('click', ()=>{
    let sizeObject = object.getBoundingClientRect();
    if(sizeObject.bottom >= sizeArena.bottom){
        alert('Mentok Bawah');
    }else{
        object.style.top = object.offsetTop+5+"px"
    }
});
btnRight.addEventListener('click', ()=>{
    let sizeObject = object.getBoundingClientRect();
    if(sizeObject.right >= sizeArena.right){
        alert('Mentok Kanan');
    }else{
        object.style.left = object.offsetLeft+5+"px"
    }
});
btnLeft.addEventListener('click', ()=>{
    let sizeObject = object.getBoundingClientRect();
    if(sizeObject.left <= sizeArena.left){
        alert('Mentok Kiri');
    }else{
        object.style.left = object.offsetLeft-5+"px"
    }
});