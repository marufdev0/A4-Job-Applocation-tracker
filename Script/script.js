let interviewList = [];
let rejectedList = [];
let curentStatuus = "all";



// job tracker 
let total = document.getElementById('total');
let interviewCount =document.getElementById('interview-Count');
let rejectedCount = document.getElementById('rejected-Count');
let sideCardList = document.getElementById('cards-list');

const cards = document.getElementById('cards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');
const noJobs = document.getElementById('no-jobs')

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
    curentStatuus = id;
    select.classList.remove('bg-white', 'text-black');
    select.classList.add('bg-blue-600', 'text-white')


    if(id === 'interview-btn'){
            cards.classList.add('hidden');
            rnaderInvterview();  
        if(interviewList.length === 0){
            noJobs.classList.remove('hidden');
            filterSection.classList.add('hidden');
        }else{
             noJobs.classList.add('hidden');
            filterSection.classList.remove('hidden');
        }  
        
    }else if(id === 'all-btn'){
        noJobs.classList.add('hidden');
        cards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if(id === 'rejected-btn'){
         cards.classList.add('hidden');
          rnaderReject();
         if(rejectedList.length === 0){
            noJobs.classList.remove('hidden')
            filterSection.classList.add('hidden')
         }else{
             noJobs.classList.add('hidden')
            filterSection.classList.remove('hidden')
         }
        
    }
    console.log(id);
    
}


mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('intervewbtn')){
        const parenNode = event.target.parentNode.parentNode;
    const compnayName = parenNode.querySelector('.CompnayName').innerText;
    const SkillsName = parenNode.querySelector('.SkillsName').innerText;
    const workDuration = parenNode.querySelector('.workDuration').innerText
    const slary = parenNode.querySelector('.slary').innerText;
    const  statuus = parenNode.querySelector('.statuus').innerText;
    const notees = parenNode.querySelector('.notees').innerText;
    parenNode.querySelector('.statuus').innerHTML = `<p  class=" text-green-500 border-2 border-green-500 bg-none font-bold inline p-1.5 rounded-[5px]">interview</p>`

    const cardsInfo = {
        compnayName,
        SkillsName,
        workDuration,
        slary,
        statuus: `<p  class=" text-green-500 border-2 border-green-500 bg-none font-bold inline p-1.5 rounded-[5px]">interview</p>`,
        notees
    }
    
    
    const interviewExist = interviewList.find(item => item.compnayName === cardsInfo.compnayName)
    if(!interviewExist){
        interviewList.push(cardsInfo);
    }
   
    rejectedList = rejectedList.filter(item => item.compnayName != cardsInfo.compnayName)
    if(curentStatuus == "rejected-btn"){
        rnaderInvterview();
    }    
    calculatCount();

    }else if(event.target.classList.contains('rejectbtn')){
        const parenNode = event.target.parentNode.parentNode;
    const compnayName = parenNode.querySelector('.CompnayName').innerText;
    const SkillsName = parenNode.querySelector('.SkillsName').innerText;
    const workDuration = parenNode.querySelector('.workDuration').innerText
    const slary = parenNode.querySelector('.slary').innerText;
    const  statuus = parenNode.querySelector('.statuus').innerText;
    const notees = parenNode.querySelector('.notees').innerText;
    parenNode.querySelector('.statuus').innerHTML = `
    <p  class=" text-red-500 border-2 border-red-500 bg-none font-bold inline p-1.5 rounded-[5px]">Rejected</p>
    `

    const cardsInfo = {
        compnayName,
        SkillsName,
        workDuration,
        slary,
        statuus: `<p  class=" text-red-500 border-2 border-red-500 bg-none font-bold inline p-1.5 rounded-[5px]">Rejected</p>`,
        notees
    }
     
    const rejectedExist = rejectedList.find(item => item.compnayName === cardsInfo.compnayName)
    if(!rejectedExist){
        rejectedList.push(cardsInfo);
    }

    interviewList = interviewList.filter(item => item.compnayName != cardsInfo.compnayName);
    if(curentStatuus == 'interview-btn'){
        rnaderReject();
    }

    calculatCount();
    
    
}else if(event.target.closest('.delet-btn')){

    const deletBtn =event.target.closest('.cards-delete-btn');
    const companyName = document.querySelector('.CompnayName');

    interviewList = interviewList.filter(item => item.companyName != companyName);

    rejectedList = rejectedList.filter(item => item.companyName != companyName)

    deletBtn.remove();
    calculatCount();

    rnaderInvterview();
    rnaderReject();

}


     
})
// function interview 
function rnaderInvterview (){
    filterSection.innerHTML = '';

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'flex justify-between border p-3 mt-2'
        div.innerHTML= `
        <div class="left-text space-y-2.5">
                    <div>
                        <p class="CompnayName">${interview.compnayName}</p>
                        <p class="SkillsName">${interview.SkillsName}</p>
                    </div>
                    <div class=" sm:flex gap-1">
                        <p class="workDuration">${interview.workDuration}</p>
                        <p class="slary">${interview.slary}</p>
                    </div>
                    <p class="statuus bg-[#EEF4FF] inline p-[5px]">${interview.statuus}</p>
                    <p class="notees text-[12px] pt-2">${interview.notees}</p>

                    <div  class="flex gap-2">
                        <button id="" class="btn text-green-500 border-2 border-green-500 bg-none font-bold intervewbtn">interview</button>
                        <button id="" class="btn text-red-500 border-2 border-red-500 bg-none font-bold rejectbtn">Rejected</button>
                    </div>
                </div>
                <!-- delete btn -->
                <div>
                    <button class="btn"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}


// function reject
function rnaderReject (){
    filterSection.innerHTML = '';

    for(let reject of rejectedList){
        console.log(reject);
        let div = document.createElement('div');
        div.className = 'flex justify-between border p-3 mt-2'
        div.innerHTML= `
        <div class="left-text space-y-2.5">
                    <div>
                        <p class="CompnayName">${reject.compnayName}</p>
                        <p class="SkillsName">${reject.SkillsName}</p>
                    </div>
                    <div class=" sm:flex gap-1">
                        <p class="workDuration">${reject.workDuration}</p>
                        <p class="slary">${reject.slary}</p>
                    </div>
                    <p class="statuus bg-[#EEF4FF] inline p-[5px]">${reject.statuus}</p>
                    <p class="notees text-[12px] pt-2">${reject.notees}</p>

                    <div  class="flex gap-2">
                        <button id="" class="btn text-green-500 border-2 border-green-500 bg-none font-bold intervewbtn">interview</button>
                        <button id="" class="btn text-red-500 border-2 border-red-500 bg-none font-bold rejectbtn">Rejected</button>
                    </div>
                </div>
                <!-- delete btn -->
                <div>
                    <button class="btn"><i class="fa-solid fa-trash"></i></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}




