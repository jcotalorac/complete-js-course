var budgetController = (function(){
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})();

console.log(budgetController.publicTest(2));

var UIController = (function(){
    
})();

var controller = (function(budgetCtrl, UICtrl){
    
})(budgetController, UIController);