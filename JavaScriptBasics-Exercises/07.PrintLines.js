function printLine(arr){

    for (let i = 0; i < arr.length; i++){

        if (arr[i] === "Stop"){

            return;
        }
        else{
            console.log(arr[i]);
        }
    }
}

printLine(["Line 1", "Line 2", "Line 3", "Stop", "Line 4"]);