const stars  = document.querySelectorAll('.star');
 const current_rate =document.querySelector('.star-rating');

 stars.forEach((star,index)=>{

    star.addEventListener('click',()=>{

let current_rating = index+1;
current_rate.innerText =`${current_rating} Rating`;

 stars.forEach((star,index)=>{

    if(current_rating >=index+1){
        star.innerHTML ='&#9733';
    }
else{
    star.innerHTML ='&#9734';
}
 })

    })

 })
