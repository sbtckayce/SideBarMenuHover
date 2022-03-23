var navList = document.querySelectorAll('.navigation-list')

function sideClick(){
    navList.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
navList.forEach((item)=>
item.addEventListener('click',sideClick));
console.log(navList)