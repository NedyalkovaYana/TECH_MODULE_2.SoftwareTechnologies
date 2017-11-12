function parseJSON(args) {

    for (let i = 0; i < args.length; i++){
        let objects = JSON.parse(args[i]);

        console.log(`Name: ${objects.name}`);
        console.log(`Age: ${objects.age}`);
        console.log(`Date: ${objects.date}`);
    }
}
parseJSON(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
           '{"name":"Tosho","age":11,"date":"04/04/2005"}']);

