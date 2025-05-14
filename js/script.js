let reviewField = document.querySelector('.reviewField');
let reviewList = document.querySelector('.reviewList');

document.querySelector('.submitBtn').addEventListener('click',()=>{
    let reviewFieldText = reviewField.value;
    if(reviewFieldText == ""){
        alert("Please write Something")
    }
    else{
       let paragraph = document.createElement("p")
       paragraph.style.color = 'white'
       paragraph.style.fontSize = '20px'
       paragraph.style.marginLeft = '10px'
       paragraph.style.marginRight = '10px'
       paragraph.style.marginTop = '10px'
       reviewList.appendChild(paragraph)
       paragraph.innerHTML = reviewFieldText
       reviewField.value = ""
    }
    
})
document.querySelector('.resetBtn').addEventListener('click', ()=>{
   reviewList.innerHTML = ""; 
})