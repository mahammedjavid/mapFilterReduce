// Filter 

console.log("Filter")

var array = [2,5,6,4,3,8,10]

function isEven(x){
    return x%2
}
var filterEg = array.filter(isEven)

// isEven is Funtion ,we can directly write the function inside () 
var filterEgIn = array.filter((z)=> z%2===0 )


console.log(filterEgIn)
// console.log(filterEg)


//MAP()

console.log("MAP")

var array1 = [4,2,5,7,3,10]

// var mapp = array1.map(double)

var mappIN = array1.map((g)=>(g*2))

function double(f){
    return f*2
}


// console.log(mapp)
console.log(mappIN)


// REDUCE()

console.log("REDUCE")

var array2 = [2,5,3,8,7,8,8,12]

var abb = array2.reduce(findsums,0)
function findsums(){
    let sum = 0
    for(let i=0;i<array2.length;i++){
        sum = sum + array2[i]
    }
    return sum
}

console.log(abb)



// reduce()  here we are writing the function inside ()

var totalSum = array2.reduce( (total,iterator) => {
    total = total + iterator
    return total
},0)


console.log(totalSum)


console.log("below are the finding the max in array using reduce")

var array3 = [2,3,5,3,2,99,345,76,12,87]
var maxValue = array3.reduce((max,iterator1)=>{
    if(iterator1>max){
        max = iterator1
    }
    return max
} )
console.log(array3)
console.log(maxValue)
