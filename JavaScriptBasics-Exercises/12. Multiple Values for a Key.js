function multiplyValueByKeys(args){
    let newArray = [];
    let duplicateKey = args[args.length - 1];
    for (let i = 0; i < args.length - 1; i++){
        let temp = args[i].split(' ');

        let key = temp[0];
        newArray[key] = temp[1];

        if (duplicateKey === key) {
                console.log(newArray[key]);
        }
    }
    if (duplicateKey in newArray){

    }
    else{
        console.log("None");
    }
}

multiplyValueByKeys(["3 bla", "3 alb", "2"]);