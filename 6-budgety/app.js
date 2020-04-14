var budgetController = (function(){
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: add
    }
})();

console.log(budgetController.publicTest(2));