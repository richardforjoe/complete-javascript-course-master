
// UI - replaced with UI Controller DOMstrings object
/**var budgetMonthText = document.querySelector('.budget__title--month');
var budgetValue = document.querySelector('.budget__value');
var budgetIncomeValue = document.querySelector('.budget__income--value');
var budgetIncomePercentage = document.querySelector('.budget__income--percentage');
var addButton = document.querySelector('.add__btn');
var inputType = document.querySelector('.add__type');
var inputDescription = document.querySelector('.add__description'); 
var inputValue = document.querySelector('.add__value');
**/



//Budget Controller Modules
var budgetController = (function() {

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    //.prototype since this is needed for each element.
    Expense.prototype.calcPercentage = function(totalIncome){
    if (totalIncome > 0){
        this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
        this.percentage = -1;
    };
};

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(current) {
            sum = sum + current.value;
        });
        data.totals[type] = sum;
    }

        
    var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            },
            budget: 0,
            percentage: -1 // doesn't exist
        };

        return {
            addItem: function(type,des, val){
                var newItem, Id;

                //ID = lastID + 1
                console.log(type + des + val);
                console.log(data.allItems[type].length)

                if (data.allItems[type].length > 0){
                Id = data.allItems[type][data.allItems[type].length - 1].id + 1;
                } else {
                Id = 0;
            }
                if (type === 'exp') {
                newItem = new Expense(Id, des, val);
                } else if (type === 'inc') {
                    newItem = new Income(Id, des, val)
                }
                //[] - select array from data.allItems
                //Push it into our data
                data.allItems[type].push(newItem);
                console.log(data);

                // Return the new element
                return newItem;
                
            },
            deleteItem: function(type, id){
                var idList, index,ids;
                console.log(id);

                //data.allItems[type][id]
                idList = data.allItems[type].map(function(current){
                    //.map returns an array of the indexes
                    return current.id
                });
                console.log(idList);

                console.log(id);
                //ids = parseInt(id);
                index = idList.indexOf(id);
                console.log(index,type,id);
                if (index !== -1) {
                    data.allItems[type].splice(index,1);
                    //removes elements at the index
                } else {
                    console.log('nothing happened')
                }
            },

            calculateBudget: function(){
                //calculate total income and expenses
                calculateTotal("inc");
                calculateTotal("exp");

                //calculate the budget: income - expenses
                data.budget = data.totals.inc - data.totals.exp;
                //percenatage of income that we spent
                if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                } else {
                    data.percentage = -1;
                }
            },

            calculatePercentages: function(){

                //a = 20, b = 10, c = 40, income = 100

                data.allItems.exp.forEach(function(current){
                    current.calcPercentage(data.totals.inc);
                });

            },

            getPercentages: function(){
                //.map is used when you want the returned array to be stored - all exp items array , get percenatage
                var allPerc = data.allItems.exp.map(function(current){
                    return current.getPercentage(); //called 5 times if there are 5 expenses
                });
                return allPerc; //return array with all the percentages calcualted
            },

            getBudget: function() {
                return {
                    budget: data.budget,
                    totalInc: data.totals.inc,
                    totalExp: data.totals.exp,
                    percentage: data.percentage
                }
            },

            testing: function(){
                
                console.log(data);
                this.calculateBudget();
                console.log(data);
                return data;
            },

            
        }
        
})();

//UI Controller
var UIController = (function() {

    var DOMstrings = {
        // UI
budgetMonthTextClass: '.budget__title--month',
budgetValueClass: '.budget__value',
budgetIncomeValueClass: '.budget__income--value',
budgetExpenseValueClass: '.budget__expenses--value',
budgetIncomePercentageClass: '.budget__income--percentage',
budgetExpensePercentageClass: '.budget__expenses--percentage',
addButton: document.querySelector('.add__btn'),
addButtonClass: '.add__btn',
inputType: '.add__type',
inputDescription: document.querySelector('.add__description'), 
inputValue: document.querySelector('.add__value'),
inputDescriptionClass: '.add__description', 
inputValueClass: '.add__value',
incomeContainer: document.querySelector('.income__list'),
expenseContainer: document.querySelector('.expenses__list'),
allListContainerClass: '.container',
expensePercentageClass: '.item__percentage',
dateClass: '.budget__title--month'




    };

    var formatNumber =  function(number,type){
        var numberSplit, commaMaxLength, int, decimal;
        commaMaxLength = 3;
        /*
        + or - before numbers
        2 decimal points for all numbers
        comma seperationg 1,000
        */

        //calculate absolute number using .abs method
        //.toFixed(2) method of number prototype - always put 2 decimal on the numbers

        number = Math.abs(number);
        number = number.toFixed(2);

        //split number into integer - decimal, using .split
        numberSplit = number.split('.');
        int = numberSplit[0];
        decimal = numberSplit[1];

        //add comma, using substr method
        if (int.length > commaMaxLength) {
            int = int.substr(0, int.length - commaMaxLength) + ',' + int.substr(int.length - 3,int.length);
            
        }

        dec = numberSplit[1];
        
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    };

    var nodeListForEach = function(list,callback){
        for ( var i = 0; i < list.length; i++) {
            callback(list[i], i); //first class functions
        }
    };

    return{
        getinput: function(){
            return{
            type: document.querySelector(DOMstrings.inputType).value, // Will be iether inc or exp
            description: document.querySelector(DOMstrings.inputDescriptionClass).value,
            value: parseFloat(DOMstrings.inputValue.value) //use parseFloat to convert string to a number - "1231" -> 1231 
        };
        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            //create HTML String with Placeholder text
            if (type === 'inc'){
            element = DOMstrings.incomeContainer;    
            html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
            element = DOMstrings.expenseContainer;     
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // replace the placeholder text with actual data

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value,type));
            

            
            //insert the html into DOM - HTL inserted as the last child in the list.
            element.insertAdjacentHTML('beforeEnd', newHtml);
            

        },

        deleteListItem: function(selectorId){
            var element = document.getElementById(selectorId);
            element.parentNode.removeChild(element);
        },

        clearFields: function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescriptionClass + ', ' + DOMstrings.inputValueClass);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current,index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(dataObject){
            //create HTML String with Placeholder text
            
            dataObject.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetValueClass).textContent = formatNumber(dataObject.budget, type);
            document.querySelector(DOMstrings.budgetIncomeValueClass).textContent = formatNumber(dataObject.totalInc, 'inc');
            document.querySelector(DOMstrings.budgetExpenseValueClass).textContent = formatNumber(dataObject.totalExp,'exp');
            

            if (dataObject.percentage > 0) {
                document.querySelector(DOMstrings.budgetExpensePercentageClass).textContent = dataObject.percentage + ' %';
            } else {
                document.querySelector(DOMstrings.budgetExpensePercentageClass).textContent = '---';
            }
        },

        displayPercentages: function(percentages){

            var fields = document.querySelectorAll(DOMstrings.expensePercentageClass);

            

            nodeListForEach(fields, function(current, index){
                //
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
                
            });

        },
        displayMonth: function(){
            var now, month, year;
            now = new Date();

            months = ['January', 'February','March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December'];
            month = months[now.getMonth()];
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateClass).textContent = month + ' ' + year;

        },

        resetBudget: function(){
            document.querySelector(DOMstrings.budgetValueClass).textContent = "0";
            document.querySelector(DOMstrings.budgetIncomeValueClass).textContent = "0";
            document.querySelector(DOMstrings.budgetExpenseValueClass).textContent = "0";
            document.querySelector(DOMstrings.budgetExpensePercentageClass).textContent = "0" + ' %';

        },
        
        changeType: function(){

                var fields = document.querySelectorAll(
                    DOMstrings.inputType + ',' + 
                    DOMstrings.inputDescriptionClass + ',' +
                    DOMstrings.inputValueClass
                );

                nodeListForEach(fields, function(current){
                    current.classList.toggle('red-focus');
                });

                document.querySelector(DOMstrings.addButtonClass).classList.toggle('red');
                
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    // Some code

})();

//Global App Controller - Tell other modules what to do. Call other methods
var controller = (function(budgetCtrl, UICtrl){

        var setupEventListeners = function(){
            var DOM = UICtrl.getDOMstrings();

            DOM.addButton.addEventListener('click', ctrlAddItem);

            document.addEventListener('keypress',function(event){
                    console.log(event);
        
                    if (event.keyCode ===13 || event.which === 13){
                        console.log('ENTER was pressed.')
                        ctrlAddItem();
                    }
            });
            document.querySelector(DOM.allListContainerClass).addEventListener('click', ctrlDeleteItem);
        
            document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
        
        };

        
        
        var updateBudget = function() {
            console.log('Budget update')

                    //5. Calc the budget
                    budgetCtrl.calculateBudget();
                    //6. return the budget - simple function
                    var budget = budgetCtrl.getBudget();
                    //7. Display the budget in the UI - UI controller
                    console.log(budget);
                    UICtrl.displayBudget(budget);

        };

        var updatePercentages = function(){

            //1. Calc the percentages
            budgetCtrl.calculatePercentages();

            //2. Read percentages from the budget controller
            var percentages = budgetCtrl.getPercentages();
            //3. update the UI with the new percentages
            console.log(percentages);
            UICtrl.displayPercentages(percentages);

        };
        
        var ctrlAddItem = function() {    
            console.log('BUTTON was clicked')

            var input, newItem;

        //check if the data is blank
        input = UICtrl.getinput();
        
        // if statement to ensure blank values are not accepted. User can only input valid values
        //descption is not blank, value is a number, description is longer thatn 3 characters

        if (input.description !== "" && !isNaN(input.value) && input.value > 0 && input.description.length > 3) {
            
        //1. get the filled input data

        console.log(input);
        // 2. Add the item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);
        //3. Add the new item to the user interface
        UIController.addListItem(newItem, input.type);

        //4. Clear the fields
        UICtrl.clearFields();

        //6. Display the budget in the UI
        updateBudget();

        //7. calculate and update percentages
        updatePercentages();

        

        
        
    } else {
    console.log("You've entered blank values"); 
    };
};
    var ctrlDeleteItem = function(event) {//event needed to find out target propertyl
        var itemId, splitId, Id;

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id
        console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
        
        if(itemId) {

                //inc-1 , split method
                splitId = itemId.split('-');
                type = splitId[0];
                Id = parseInt(splitId[1]);
                console.log(type,Id);

                //1. delete item from data structure
                budgetCtrl.deleteItem(type,Id);

                //2. Delete the item from the UI    
                UICtrl.deleteListItem(itemId);
                //3. Update and show the new budget
                updateBudget();

                //4. calculate and update percentages
                updatePercentages();
    
                
        }
    };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
            UICtrl.displayMonth();
            UICtrl.displayBudget({budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1});
            //UICtrl.resetBudget();
        }
    }
    
})(budgetController,UIController);

controller.init();

