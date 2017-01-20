function ProductControllerFN($scope,Product){
    $scope.products=Product.query();
    $scope.categories=Product.getCategories();
    $scope.product=new Product();
    $scope.selectedIndex=null;
    $scope.selectProduct=function(_product,_$index){
        $scope.selectedIndex=_$index;
        $scope.product=_product;
    }
    $scope.filterCategories=function(){
        $scope.products=Product.query($scope.search);
    }
    $scope.save=function(){
        if(selectedIndex==null){
            $scope.product.$save();
            $scope.products.push($scope.product);
        }else{
            $scope.product.$update();
        }
    }
    $scope.delete=function(){
        $scope.product.$delete();
        $scope.products.splice(selectedIndex,1);
        $scope.product=new Event();
        $scope.selectedIndex=null;
    }
    $scope.reset=function(){
        $scope.product=new Product();
        $scope.selectedIndex=null;
    }
    $scope.enablePromotion=function(){
        $scope.product.onPromotion=1;
    }
    $scope.disablePromotion=function(){
        $scope.product.onPromotion=0;
    }

}
ProductControllerFN.$inject=["$scope","Product"];
angular
    .module("examen")
    .controller("ProductController",ProductControllerFN);