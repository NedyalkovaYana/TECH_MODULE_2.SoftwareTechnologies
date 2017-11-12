function findLargestNums(args) {

   args = args.map(Number).sort((a, b) => b-a);

   let length = Math.min(args.length, 3);

   for (let i = 0; i < length; i++){

       console.log(args[i]);
    }
}

findLargestNums(['10', '30', '15', '20', '50', '5']);