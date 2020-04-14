var budgetController = (function(){
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();

//console.log(budgetController.publicTest(2));

var UIController = (function(){
    
})();

var controller = (function(budgetCtrl, UICtrl){
    
    var z = budgetCtrl.publicTest(2);
    
    return {
        anotherPublic: function() {
            return z;
        }
    }
})(budgetController, UIController);

console.log(controller.anotherPublic());