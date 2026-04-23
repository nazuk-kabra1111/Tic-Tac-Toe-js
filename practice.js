console.log("Hello! Nazuk Kabra");

/*    GUESS THE NUMBER    */
// let num=94;
// let guess;
// guess=prompt("Guess the number");
// let attempts=0;
// do{
//     console.log("You entered:",guess);
//     if(guess<=(num-10)){
//         guess=Number(prompt("Very Low, enter again"));
//     }
//     else if(guess>=(num+10)){
//         guess=Number(prompt("Very High,enter again"));
//     }
//     else if(guess>=(num-5) && guess<(num)){
//         guess=Number(prompt("Very Close but Low, enter again"));
//     }
//     else if(guess<=(num+5) && guess>(num)){
//         guess=Number(prompt("Very Close but High, enter again"));
//     }
//     attempts++;
// }while(guess!=num);
// console.log("Congratulations You guessed the number");
// console.log("You guessed the number in:",attempts,"chances");

/*     GUESS THE NUMBER    */


// function addition(m,n){
//     console.log(`Addition of two numbers ${m} and ${n} is: ${m+n}`);
// }
// let x=Number(prompt("Enter num1:"));
// let y=Number(prompt("Enter num2:"));
// addition(x,y);

// function countit(str){
//     let c=0;
//     for(let i of str){
//         if(i=='a' || i=='A' || i=='e' || i=='E' || i=='i' || i=='I' || i=='o' || i=='O' || i=='u' || i=='U'){
//             c+=1;
//         }
//     }
//     return c;
// }
// let cn=countit("Hello World");
// console.log(`Number of vowels in the given string is: ${cn}`);

// let a=0;
// const cnt=(str)=>{
//     for(let i of str){
//         if(i=='a' || i=='A' || i=='e' || i=='E' || i=='i' || i=='I' || i=='o' || i=='O' || i=='u' || i=='U'){
//             a+=1;
//         }
//     }
//     return a;
// }
// let ans=cnt("adieu");
// console.log(`Number of vowels in the given string is: ${ans}`);

// let arr=[4,7,2,9,14];
// let newarr=arr.filter((val)=>{
//     return val>4;
// })
// console.log(newarr);

// let n=Number(prompt("Enter any number"));
// let c;
// let arr1=[];
// for(let i=1;i<=n;i++){
//     // arr1.push(i);
//     arr1[i-1]=i;
// }
// let output=arr1.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(output);

// let a1=document.querySelector("h2");
// console.dir(a1.innerText);
// a1.innerText=a1.innerText+"How are you doin'?";
// console.dir(a1.innerText);

// let a2=document.querySelectorAll(".box");
// console.dir(a2);
// a2[0].innerText=a2[0].innerText+"??";
// a2[1].innerText=a2[1].innerText+"!";
// a2[2].innerText=a2[2].innerText+"$$";
// console.dir(a2[0].innerText);
// console.dir(a2[1].innerText);
// console.dir(a2[2].innerText);
// console.dir(a2);

// let a1=document.querySelector("h2");
// console.dir(a1.setAttribute("class","kabra"));
// console.dir(a1.getAttribute("class"));

// let div=document.querySelector("div");
// let head1=document.createElement("h4");
// head1.innerText="Hello i am nazuk";
// head1.style.color="purple";
// div.appendChild(head1);

// console.dir(div);
// let a4=document.getElementById("abc1");
// div.removeChild(a4);

// let newbtn=document.createElement("button");
// newbtn.innerText="Click Me!";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// newbtn.style.margin="5px";
// let body=document.querySelector("body");
// body.after(newbtn);

// let btn=document.querySelector("#toggle");
// let idx=0;
// btn.addEventListener("click",() => {
//     if(idx%2==0){
//         document.body.style.backgroundColor="black";
//         console.log("Clicked! and Mode is: Dark");
//     }
//     else{
//         document.body.style.backgroundColor="white";
//         console.log("Clicked!Mode is:White");
//     }
//     idx++;
// })