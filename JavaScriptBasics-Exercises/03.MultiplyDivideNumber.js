function multiplyOrDivide(args) {

    let n = Number(args[0]);
    let m = Number(args[1]);
    let rezult = 0;
    if (n > m){
        rezult = n/m;
    }
    else {
        rezult = n * m;
    }
    console.log(rezult);
}
multiplyOrDivide(["15", "8"]);