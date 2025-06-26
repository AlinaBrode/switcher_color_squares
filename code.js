function setDiv1Aqua(){
  document.querySelector("#id_div_1").style.backgroundColor="aquamarine";
}
function setDiv1Chart(){
  document.querySelector("#id_div_1").style.backgroundColor="chartreuse"
}
function setDiv2Aqua(){
  document.querySelector("#id_div_2").style.backgroundColor="aquamarine";
}
function setDiv2Chart(){
  document.querySelector("#id_div_2").style.backgroundColor="chartreuse"
}
function setDiv3Aqua(){
  document.querySelector("#id_div_3").style.backgroundColor="aquamarine";
}
function setDiv3Chart(){
  document.querySelector("#id_div_3").style.backgroundColor="chartreuse"
}
function setDiv4Aqua(){
  document.querySelector("#id_div_4").style.backgroundColor="aquamarine";
}
function setDiv4Chart(){
  document.querySelector("#id_div_4").style.backgroundColor="chartreuse"
}

const button1 = document.querySelector("#button_id1");
button1.addEventListener("click", setDiv4Aqua);

const button2 = document.querySelector("#button_id2");
button2.addEventListener("click", setDiv4Chart);