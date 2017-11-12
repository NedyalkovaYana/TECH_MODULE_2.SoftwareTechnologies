function product(args) {

    for (let i = 0; i < args.length; i++) {
        if (args[i] == 0) {
            console.log("Positive");
            return;
        }
    }

    let oddCount = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] < 0) {
            oddCount ++;
        }
    }

    if (oddCount % 2 == 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
}

product(["-2", "-1", "3"]);