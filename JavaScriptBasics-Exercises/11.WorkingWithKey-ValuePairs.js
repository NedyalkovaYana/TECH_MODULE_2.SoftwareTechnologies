function keyValuePair(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(' ');
        if (temp.length > 1) {

            var key = temp[0];
            var value = temp[1];
          newArray[key] = value;

        }
    }
    let findKey = arr[arr.length - 1];

    if (newArray[findKey] === undefined){
        console.log("None");
    }
    else{
        console.log(newArray[findKey]);
    }

}

keyValuePair(["3 test", "3 test1", "4 test2", "4 test3", "4 test5", "4"]);