var numbers = [3, 6, 9, 12, 15];

//forEach over numbers and add 1 to each number
//update the original array

numbers.forEach(function (val, i, arr){
    var newNum = val + 1;
    arr[i] = newNum;
})
numbers

var employees = [
    { name: "aaron", pay: 12 },
    { name: "b-bron", pay: 18 },
    { name: "c-ron", pay: 20 },
    { name: "le-bron", pay: 21 },
]

//forEach over employees and give each employee a bump in pay by 3
employees.forEach(function (val, i, arr){
    val.pay += 3
})
employees