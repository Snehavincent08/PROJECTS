let subtotal = 0;

function addTotal(num, qty, id){
    let output = (num * qty).toFixed(2);
    return id.textContent = output;
}
function subTotal(num, qty, id){
    let output = (num * qty).toFixed(2);
    return id.textContent = output;
}

function clearTotal(num, qty, id){
    let output = num * qty;
    return id.textContent =  output;
}


function checkOut(sbt,stax, tt){
let output1= Number(document.getElementById("output1").textContent);
let output2 = Number(document.getElementById("output2").textContent);
let output3 = Number(document.getElementById("output3").textContent);
let output4 = Number(document.getElementById("output4").textContent);
let output5 = Number(document.getElementById("output5").textContent);
let output6 = Number(document.getElementById("output6").textContent);
let output7 = Number(document.getElementById("output7").textContent);
let output8 = Number(document.getElementById("output8").textContent);

    subtotal = output1 + output2 + output3 + output4 + output5 + output6 + output7 + output8;
    
    sbt.textContent = `$${(subtotal.toFixed(2))}`;
    stax.textContent = `$${(subtotal*0.045).toFixed(2)}`;
    tt.textContent = `$${(subtotal+(subtotal*0.045)).toFixed(2)}`;
    

}





