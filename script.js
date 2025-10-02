let random_num=1+Math.floor(100*Math.random());
let a;
let no_of_guess=0;
do{
   a=parseInt(prompt("enter a number"));
   if(a==random_num){
    alert("you guess it right")
    let score=100-no_of_guess;
    alert(`your score is:${score}`);
   }else if(a>random_num){
      no_of_guess++
    alert("your number is greater")
   }else if(a<random_num) {
    alert("your number is smaller")
    no_of_guess++
   }else{
      alert("invalid input")
      no_of_guess++
   }

}while(a!=random_num);
