function jsObject(args) {

        for (let i = 0; i < args.length; i++) {
            let tokens = args[i].split(' -> ');
            let name = tokens[0];
            let age = tokens[1]
            let grade = tokens[2];
            let obj = {};

            obj.name = name;
            obj.age = age;
            obj.grade = grade;
            console.log(`Name: ${obj.name}`);
            console.log(`Age: ${obj.age}`);
            console.log(`Grade: ${obj.grade}`);
        }

}
jsObject(["Pesho -> 13 -> 6.00", "Ivan -> 12 -> 5.57", "Toni -> 13 -> 4.90"]);