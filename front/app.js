function configFN($routeProvider){
    $routeProvider
        .when("/products",{
            controller:"ProductController",
            templateUrl:"./product/product.view.html"
        })
        .otherwise({redirectTo:"/products"});
}

angular
    .module("examen",["ngRoute","ngResource","custom.directive","custom.filter"])
    .config(configFN);