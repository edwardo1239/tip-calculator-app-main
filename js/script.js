var container = document.getElementById("container");
var bill = document.getElementById("bill");
const d5 = document.getElementById("percentage5");
var d10 = document.getElementById("percentage10");
var d15 = document.getElementById("percentage15");
var d25 = document.getElementById("percentage25");
var d50 = document.getElementById("percentage50");
var custom = document.getElementById("custom");
var npeople = document.getElementById("npeople");
var reset = document.getElementById("reset");
var container = document.getElementById("Conatiner");
var tip_result = document.getElementById("Tip_Result");
var Total_out = document.getElementById("Total_out");
var tip = 0;
var x = 0;

function buttonBackground(d = 0) {
    d5.style.backgroundColor = "hsl(183, 100%, 15%)";
    d10.style.backgroundColor = "hsl(183, 100%, 15%)";
    d15.style.backgroundColor = "hsl(183, 100%, 15%)";
    d25.style.backgroundColor = "hsl(183, 100%, 15%)";
    d50.style.backgroundColor = "hsl(183, 100%, 15%)";
    
    if(d != "0"){d.style.backgroundColor = " hsl(172, 67%, 45%)";
    custom.placeHolder = "Custom";
    custom.value = "";
}

    
        
}

function TotalCalculator (Tip){
    n = parseFloat((x * Tip) + parseFloat(x));
    n = n / parseFloat(npeople.value);
    n = n.toFixed(2);

    t = parseFloat(x * Tip);
    t = t / parseFloat(npeople.value);
    t = t.toFixed(2);
    
    //return parseFloat(Bill*Tip + bill);
    //console.log(parseFloat((x * Tip) + parseFloat(Bill)))
    Total_out.textContent = "$" + n;
    tip_result.textContent = "$" + t;
}



function peopleR (Tip){
    if(npeople.value == 0){
        npeople.style.border = "1";
        npeople.style.borderColor = "red";
        npeople.style.backgroundColor = "rgba(206, 192, 192, 0.5)";
        document.getElementById("h6").style.display = "block";
        
        
    }
    else{
        npeople.style.border = "0";
        npeople.style.backgroundColor = "hsl(189, 41%, 97%)";
        document.getElementById("h6").style.display = "none";
        TotalCalculator(Tip)

        
       
    }
}

bill.addEventListener("input", function(){
    x = bill.value
 
   peopleR(tip);
})

d5.addEventListener("click", function(){
    buttonBackground(d5);
    tip = 0.05;

    peopleR(tip);
    
    
})

d10.addEventListener("click", function(){
    buttonBackground(d10);
    tip = 0.10;
  
    peopleR(tip);
  
})

d15.addEventListener("click", function(){
    buttonBackground(d15);
    tip = 0.15;

    peopleR(tip);
    
})

d25.addEventListener("click", function(){
    buttonBackground(d25);
    tip = 0.25;
 
    peopleR(tip);

})
d50.addEventListener("click", function(){
    buttonBackground(d50);
    tip = 0.50;
 
    peopleR(tip);
 
})

custom.addEventListener("input", function(){
    
    buttonBackground();

    peopleR(parseFloat( custom.value) / parseFloat(100));
})

npeople.addEventListener("input", function(){
  
    peopleR(tip);
})

reset.addEventListener("click", function(){
    buttonBackground();
    bill.value=""
    bill.placeHolder="0"
    x = 0;
    tip=0;
    custom.value = "";
    custom.placeHolder = "Custom";
    Total_out.textContent = "$0.00"
    npeople.value = "1";
    peopleR(tip);
})

