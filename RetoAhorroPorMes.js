//creamos la función para calcular el ahorro con un 20% de las ganancias y gastos tenidos en cuenta
function CalculateSavings (salary, expenses) {
    const salaryWithExpenses = salary - expenses;
    const salarySavings = (salaryWithExpenses * 20) / 100;
    const salaryResult = salarySavings;

    return salaryResult;
};


//creamos la función para el botón 
function onClickButtonSavings() {
    const inputSalary = document.getElementById("InputSalary");
    const salaryValue = parseInt(inputSalary.value);

    const inputExpenses = document.getElementById("InputExpenses");
    const expensesValue = parseInt(inputExpenses.value);

    if(salaryValue >=0  && expensesValue >=0)
    {
        if (salaryValue > expensesValue)
        {
    
            const savings = CalculateSavings(salaryValue, expensesValue);
        
               
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El ahorro recomendado de este mes es de: $" + savings;

        } 
        else
        {

            const resultP = document.getElementById("ResultP");
            resultP.innerText = "Estas gastando más de lo que ganas, CUIDADO AMIG@!!!"
        }
    }
    else
    {
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "No puedes ingresar valores negativos"
    }

};