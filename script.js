let choice;
do{
let r=Math.floor(Math.random()*100);
let ch;

if(r<33){
    ch='r';
}
else if(r>=33&&r<66){
    ch='p';
}
else if(r>=66){
    ch='s';
}

let user=prompt("Enter r for rock, p for paper and s for scissor:");
if(user.length>1||user.length<1){
    document.write("Invalid answer.");
    console.error("Invalid entry.");
}
user.toLowerCase();

if(ch=='r'&&user=='s'||ch=='s'&&user=='p'||ch=='p'&&user=='r'){
    alert("You lose.");
  
}
else if(ch==user){
    document.write("Draw");
}
else{

    alert("You won");
}
document.write("Computer chose "+ch+"\n");
document.write("You chose "+user+"\n\n");
document.write("\n------------------------------------------------------------\n");
choice=confirm("Do you want to play again?");
}while(choice);
