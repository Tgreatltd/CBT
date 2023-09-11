let display2=document.getElementById('display2')
let index=0 ;
let loop=document.getElementById('loop');
let btn1= document.getElementById('btn1');
let btn2= document.getElementById('btn2');
let btn3= document.getElementById('btn3');





let arr= [
   
    {
        question:'who is the president of nigeria',
        options:['teslim', 'Tinubu', 'jonathan'],
        answer:'Tinubu',
        chosen: ''
    },
        {
            question:'who is javascript instructor',
            options:['teslim', 'buhari', 'jonathan'],
            answer:'teslim',
            chosen: ''
        },
        
        {
            question:'which state is ibadan located',
            options:['oyo', 'osun', 'ogun'],
            answer:'oyo',
            chosen: ''
        },
        {
          question:'which state is Abeokuta located',
          options:['oyo', 'osun', 'ogun'],
          answer:'ogun',
          chosen: ''
      },
      {
        question:'who is the president of USA',
        options:['Biden', 'buhari', 'jonathan'],
        answer:'Biden',
        chosen: ''
    },
    {
      question:'what is the capital of Nigeria',
      options:['Lagos', 'Calabar', 'Abuja'],
      answer:'Abuja',
      chosen: ''
  },
  {
    question:'what is the capital of OYO',
    options:['Ibadan', 'Calabar', 'Abuja'],
    answer:'Ibadan',
    chosen: ''
}

]




function me(){
   display2.innerHTML='';
    document.getElementById('display1').
    innerHTML= arr[index].question;
    arr[index].options.forEach(function(opt,i){
      let mark=arr[index].chosen==opt
        display2.innerHTML+=`<h6><input type="radio"  ${mark?'checked':''} name="option"
        onclick="setAnswa(${i})">&nbsp&nbsp<span>${opt}</span></h6>&nbsp&nbsp&nbsp
        
        `
        loop.innerHTML=`
        <h1>Question${index+1} of ${arr.length}</h1>
        `
       
         
       
    });
}


function setAnswa(i){
    if (arr[index].chosen=="") {
      correctScore++
    } 
    arr[index].chosen= arr[index].options[i];
    console.log( arr[index].chosen);
    correctScore=correctScore
  }
   me();
function load(){
  document.getElementById('btn1').style.display='none'
}

function next(){
 display2.innerHTML=''
    
    if (index<arr.length-1) {
      index++
      btn1.style.display='inline'
    }
    
   
 
    
    me()
   
  }
  
  function prev(){
   
  
   
  //     index--
    
  // me()
      
 
  //     if (index==0) {
  //         index++
  //     }
  //     me()

  if (index!==0) {
    index--
  } 
  // else if (index==0) {
  //   btn1.style.display=''
  // }
  me()

  }

// function submit(){

// // if (arr[index].chosen==arr[index].answer) {
// //   alert('correct')
// // }



// // if (arr[index].chosen==arr[index].answer) {
// //  answer++
// // } else {
 
// // }





//   let chosen= arr.filter (function (you) {
//    return you.chosen==''
//   })
// // alert(`you got ${arr.chosen} out of ${arr.answer}`)
// console.log(`${chosen} out of ${chosen.length}`);

// }




// let ar= [
//   {
//     name:'tobi', age:10,
//   },
//   {
//     name:'tola', age:10,
//   },
//   {
//     name:'toba', age:11,
//   },
//   {
//     name:'tosun', age:15,
//   },
//   {
//     name:'tob', age:10,
//   },
//   {
//     name:'timy', age:10,
//   },
//   {
//     name:'tobi', age:12,
//   },
 
// ]

// let age=ar.filter(function(el){
//   return el.age==10

// }
// )
// console.log(age);

let answer= [];
let chosen= [];
let totalScore=[];
let correctScore=0;
  


// arr.forEach((el)=>{
//   if (el.answer==el.chosen) {
//     correctScore++
 
//   } else {
//     correctScore=correctScore
//   }
// })

let good = document.getElementById('good');


function submit(){
 totalScore= arr.filter((el) => {
    return el.chosen==el.answer;
  })
  console.log(arr);
  // alert(`${totalScore.length} out of ${arr.length}`)
  document.getElementById('myScore').innerHTML = `you scored ${totalScore.length} out of ${arr.length}`
  console.log(document.getElementById('myScore').innerHTML = `${totalScore.length} out of ${arr.length}` );
//  document.getElementById('show').innerHTML= `${totalScore.length} out of ${arr.length}`

document.getElementById('myModal2').style.display='inherit'
      document.getElementById('display1').style.display='none'
      document.getElementById('display2').style.display='none'
      document.getElementById('btn1').style.display='none'
      document.getElementById('btn2').style.display='none'
      document.getElementById('loop').style.display='none'
      document.getElementById('btn3').style.display='none'
      document.getElementById('btn4').style.display='inline'
      document.getElementById('time').style.display='none'

    
   
      







if (totalScore.length<=3) {
  good.innerHTML='you are a dullard'
} else {
  good.innerHTML='Congratulations'
}

if (totalScore.length<=3) {
  good.style.backgroundColor='red'
} else
  {good.style.backgroundColor='green'}
}


function you(){
  document.getElementById('mode').innerHTML = `you have only attempted ${correctScore} out of ${arr.length}`
}

let timer;
let min=1;
let sec=60;



function tim(){
 
  timer=setInterval(function(){
    sec--
    minutes.innerHTML=min
    seconds.innerHTML=sec
    // if (min==0 && sec==0) {
    //   clearInterval(timer)
    // } 
    if (sec==0 && min==0) {
      
      // document.getElementById('myModal2').style.display='inherit'
      // document.getElementById('display1').style.display='none'
      // document.getElementById('display2').style.display='none'
      // document.getElementById('btn1').style.display='none'
      // document.getElementById('btn2').style.display='none'
      // document.getElementById('loop').style.display='none'
      // document.getElementById('btn3').style.display='none'
      // document.getElementById('btn4').style.display='inline'
      // document.getElementById('time').style.display='none'
  
      submit()
      
      clearInterval(timer)
    }
    if (sec==0) {
      sec=60
      min--
    }
    if (sec>=60) {
      
    }
    
  }, 1000);
  
  
}
tim()

function reload(){
      // document.getElementById('display1').style.display='inline'
      // document.getElementById('display2').style.display='inline'
      // document.getElementById('btn1').style.display='inline'
      // document.getElementById('btn2').style.display='inline'
      // document.getElementById('loop').style.display='inline'
      // document.getElementById('btn3').style.display='inline'
      // document.getElementById('all').style.display='inline'
      // document.getElementById('time').style.display='inline'

window.location.reload()


      
      
     
    }
 

 


