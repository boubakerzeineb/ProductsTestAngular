function filterfn(input,promotion){
    return input-(input*promotion/100);
}
function promotionFN(){
    return filterfn;
}
angular
    .module("custom.filter",[])
    .filter("promotion",promotionFN);
