function cashOut(money){
    if(money<0 || "strin" !== "number" ){
        return"Invalid";
    }
        
    
    let charge = money * (1.75 /100);
    let fixedcharge = charge.toFixed(2);
    let finalCharge = parseFloat(fixedcharge);
    return finalCharge ; 

}
console.log(cashOut("mewauu"));