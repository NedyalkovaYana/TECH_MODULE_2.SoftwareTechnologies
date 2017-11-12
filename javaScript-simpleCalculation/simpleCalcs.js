function solve(arr) {
let nums = arr[0].split(' ').map(Number);

console.log(
    checkForSum(nums[0], nums[1], nums[2]) ||
    checkForSum(nums[0], nums[2], nums[1]) ||
    checkForSum(nums[1], nums[2], nums[0]) ||
    'No');

function checkForSum(num1, num2, sum) {
    if (num1 + num2 !== sum) {
        return false;
    }
    if (num1 > num2){
        [num1, num2] = [num2, num1];
    }
    return `${num1} + ${num2} = ${sum}`;

}

}

solve(['8 15 7']);