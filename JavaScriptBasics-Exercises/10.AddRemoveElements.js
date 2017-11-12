function addRemoveElemen(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++){

        let temp = arr[i].split(' ');
        let command = temp[0];
        let num = temp[1];

        if (command === "add"){
            newArr.push(num);
        }
        else if (command === "remove"){
            newArr.splice(num, 1);
        }
    }

    console.log(newArr.join('\r\n'));
}

addRemoveElemen(["add 3", "add 5", "add 8", "remove 2"]);