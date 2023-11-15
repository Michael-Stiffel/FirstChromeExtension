
const amount = document.getElementById('amount');
const convert = document.getElementById('convert');
const result = document.getElementById('result');
const havecurrency = document.getElementById('havecurrency');
const wantcurrency = document.getElementById('wantcurrency');

const API_KEY="7BAlP6K8y2DvrlZpib9QSw==IJyrCUZzutIyySzG";
const apiURL="https://api.api-ninjas.com/v1/convertcurrency?";

convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const havecurrencyTotal = havecurrency.value;
    const wantcurrencyTotal = wantcurrency.value;
    const url = apiURL +"want="+havecurrencyTotal+"&have="+wantcurrencyTotal+"&amount="+amountTotal;

    fetch(url, {
        headers:{
            "X-API-KEY" : API_KEY
        }
    })
    .then (response => response.json())
    .then (data => {
        console.log(data);
        result.innerHTML =  "Deine " + data.old_amount +" "+ data.old_currency + " sind " + + data.new_amount +" "+ data.new_currency + " wert!";

    })
       
    
})
