const sum = (params1, params2) =>{
    return params1 + params2;
}

const totalSum = (...params1) =>{
    let total = 0
    params1.forEach(eachValue => {
        total += eachValue
    })
    return total;
}

console.log(totalSum(2, 5, 8))