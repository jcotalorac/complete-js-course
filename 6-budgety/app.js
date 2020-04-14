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
    return {
        getInput: function() {
            var type = document.querySelector('.add__type').value;
        }
    };
})();

var controller = (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem = function() {
        console.log('Fine');
    };
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
   
})(budgetController, UIController);