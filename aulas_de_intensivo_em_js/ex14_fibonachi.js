fibonachi = function(a, b){
    return a + b
    
}

let n1 = 0
let n2 = 1

for(let i = 0; i < 11; i++){
    res = fibonachi(n1, n2)
    n1 = n2
    n2 = res
    alert(res)
}