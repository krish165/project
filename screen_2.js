player1N=localStorage.getItem("player1");
player2N=localStorage.getItem("player2");

P2S=0;
P1S=0;

console.log(player1N);
console.log(player2N);
console.log(P2S);
console.log(P1S);


document.getElementById("P1Number").innerHTML=player1N+" : ";
document.getElementById("P2Number").innerHTML=player2N+" : ";

document.getElementById("P1S").innerHTML=P1S;
document.getElementById("P2S").innerHTML=P2S;

function send()
{
    number1=document.getElementById("no_1").value;
    number2=document.getElementById("no_2").value;

    Answer=parseInt(number1)*parseInt(number2);
    console.log(Answer);


 Question_numb_html="<h4 id='number_1'style='font-size: 25px; font-family: cursive; color: rgb(255, 0, 0);'>"+number1+"✖️"+number2+"</h4>";
 answer_html="Answer:<input type='text' style='font-size: 25px; font-family: cursive; color: rgb(255, 255, 255);' placeholder='Enter answer' class='form-control'>";
 Check_btn_html="<button class='btn btn-info'style='font-size: 25px; font-family: cursive; color: rgb(255, 255, 255);' onclick='check()'>Check</button>";
 html_data=Question_numb_html+answer_html+Check_btn_html;

 document.getElementById("output").innerHTML=html_data;

 document.getElementById("no_1").value="";
 document.getElementById("no_2").value="";

}