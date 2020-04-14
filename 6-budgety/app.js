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
    });
    
    document.addEventListener('keypress', function(event) {
        
        if(event.keyCode === 13 || event.which === 13) {
            console.log('ENTER was pressed.');
        }
    });
   
})(budgetController, UIController);