function linkFN(LocalScope,element,attrs){
    LocalScope.adding=false;
    LocalScope.validate=function(){
        LocalScope.options.push(LocalScope.singleValue);
        LocalScope.model=LocalScope.singleValue;
        LocalScope.adding=false;
    }
    LocalScope.add=function(){
        LocalScope.adding=true;
    }
}
function comboBoxFN(){
    return {
        restrict:"E",
        templateUrl:"./component/combobox.view.html",
        replace:true,
        scope:{
            options:"=values",
            model:"=ngModel"
        },
        link:linkFN
    }
}
angular
    .module("custom.directive",[])
    .directive("comboBox",comboBoxFN);