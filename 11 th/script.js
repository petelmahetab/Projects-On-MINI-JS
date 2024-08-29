//  1 Approach 

// const selectedSelector = document.querySelector('ul').addEventListener('click', (e)=>{
//     // Show the TARGET
//     const rm = e.target; 
//     if(rm.tagName.toLowerCase()==='img'||rm.tagName.toLowerCase()==='li'){
//         rm.remove();
//     }
// });

// 2 Aproach Using THIS keyword

const selectedSelector=document.querySelector('ul').addEventListener('click',function(e){
       
       if(e.target.tagName.toLowerCase()=== 'img'){
           e.target.remove();
       }   
}
);
