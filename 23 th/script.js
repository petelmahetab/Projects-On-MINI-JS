// Select all h5 elements (status text)
var isStatus=document.querySelector('h5');
var addedElement=document.querySelector('#add');
//checking some coditon
var check=0;

addEventListener('click',function(){
    //only execute when equals 0
    if(check===0){
       isStatus.textContent="Friends";
       isStatus.style.color="green";
       isStatus.size="20px";
       addedElement.innerHTML="Remove Friend"
       check=1;
  }
  else{
    isStatus.textContent="Stranger";
    isStatus.style.color="rgb(87, 4, 4)";
    isStatus.size="20px";
    addedElement.innerHTML="Add Friend"
    check=0;
  }
})

//For 2 nd Card

