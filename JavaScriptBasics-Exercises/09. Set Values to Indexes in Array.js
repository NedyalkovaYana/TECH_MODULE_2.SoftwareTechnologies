function setValuesToIndex(arr) {
    let count = arr[0];

    let newArr = [];
    for (let i = 1; i < arr.length; i++){

        let tempArr = arr[i].split(' - ');
        var index = tempArr[0];
        var value = tempArr[1];
        newArr[index] = value;
    }

    for (let i = 0; i < count; i++){
        if (newArr[i] == undefined){
            console.log(0);
        }
        else{
            console.log(newArr[i]);
        }
    }

}

setValuesToIndex(["2", "0 - 5", "0 - 6", "0 - 7"]);