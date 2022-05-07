function filtaPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 22, 67, 100, 523];

console.log(filtaPares(meuArray));