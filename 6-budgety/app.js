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
    
    document.querySelector('.add__btn').addEventListener('click', function(){
        console.log('Pressing button');
    })
   
})(budgetController, UIController);