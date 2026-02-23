let interviewList = [];
let rejectedList = [];

// job tracker 
let total = document.getElementById('total');
let interviewCount =document.getElementById('interview-Count');
let rejectedCount = document.getElementById('rejected-Count');
let sideCardList = document.getElementById('cards-list');

const cards = document.getElementById('cards')

// btn
const allbtn = document.getElementById('all-btn');
const interviewbtn = document.getElementById('interview-btn');
const rejectedbtn = document.getElementById('rejected-btn');

function calculatCount(){
 total.innerText = cards.children.length;
 sideCardList.innerText = cards.children.length;
 interviewCount.innerText = interviewList.length;
 rejectedCount.innerText = rejectedList.length;
}
calculatCount();

// togglefuncation created
function toggleStyle(id){
    allbtn.classList.add('bg-white', 'text-black');
    interviewbtn.classList.add('bg-white', 'text-black');
    rejectedbtn.classList.add('bg-white', 'text-black');
  

    allbtn.classList.remove('bg-blue-600', 'text-white');
     interviewbtn.classList.remove('bg-blue-600', 'text-white');
    rejectedbtn.classList.remove('bg-blue-600', 'text-white');

    let select = document.getElementById(id);
    select.classList.remove('bg-white', 'text-black');
    select.classList.add('bg-blue-600', 'text-white')
      console.log(id);
    
}




