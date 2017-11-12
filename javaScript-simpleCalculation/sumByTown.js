function solve(args) {
 let rezult = {};

 for (let i = 0; i < args.length; i++) {
     let townIncome = JSON.parse(args[i]);
     let name = townIncome.town;
     let income = townIncome.income;


    if (rezult[name] || rezult[name] === 0) {
        rezult[name] += income;
    }
    else{
        rezult[name] = income;
    }
 }
    let towns = Object.keys(rezult).sort();

    for (town of towns) {

        console.log(`${town} -> ${rezult[town]}`);
    }


}
solve(['{"town":"Sofia","income":200}',
'{"town":"Varna","income":120}',
'{"town":"Pleven","income":60}',
'{"town":"Varna","income":70}'
]);