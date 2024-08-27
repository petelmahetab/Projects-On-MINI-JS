//Change heading color using DOM
// const head=document.getElementsByClassName('Container');
// console.log(head);

// Change font size of List element black to red

// const col=document.getElementById('Items-list');
document.addEventListener("DOMContentLoaded",function(){

    const liItem=document.getElementById('Items-list');
    liItem.style.backgroundColor="green";
const h=document.getElementsByClassName('Item');
 for(let i=0;i<=h.length;i++){
    h[i].style.fontSize="20px";
 }
 console.log(h);

});