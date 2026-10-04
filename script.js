var son = prompt("sonni kiriting");
var daraja = prompt("darajani kiriting");
if (isNaN(son) || isNaN(daraja) || son === 0 || daraja === 0) {
    alert("qaytadan kiriting")
} else {
   let javob = 1;
    for (let i = 1; i <= daraja; i++) {
      javob = javob * son ;
        
    }

    alert(javob)
}
