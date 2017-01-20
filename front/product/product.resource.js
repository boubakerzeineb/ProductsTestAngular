function ProductFN($resource){
    var url="http://127.0.0.1/examen/index.php/angular/products/:id";
    var params={id:"@id"};
    var customMethods={
        'update':{
            method:"PUT"
        },
        'getCategories':{
            isArray:true,
            method:"GET",
            params:{id:'categories'}
        }
    };
    var Product=$resource(url,params,customMethods);
    return Product;
}
ProductFN.$inject=["$resource"];
angular
    .module("examen")
    .factory("Product",ProductFN);