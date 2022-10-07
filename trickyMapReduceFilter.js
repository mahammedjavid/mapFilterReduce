var array = [
    {firstname : "mahammed",lastname : "javid", age: 22},
    {firstname : "abdul",lastname : "ahmed", age: 20},
    {firstname : "shiek",lastname : "zayd", age: 22},
]


// Mapping  :  Modifying the array  


console.log("mapping")

var mapping = array.map( x=>(x.firstname + " " + x.lastname))

console.log(mapping)

//  if i want to count how many people are there in the same age  -- here we get only a answer so we can go with reduce

var reducing = array.reduce( function(acc,curr){
        if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age]
        }
        else{
            acc[curr.age] = 1
        }
        return acc
},{})

console.log(reducing)

//  if i want a user only below 21 , i can do the filtering -- filter()

var filtering = array.filter( (x )=>(x.age < 21))
// this will get object but i want only the firstname so,
var filteringPlusChain = array.filter( (x )=>(x.age < 21)).map((v)=>(v.firstname))
console.log("object",filtering)
console.log("chian with map",filteringPlusChain)


// reduce

var reducing123 = array.reduce(function(acc,curr){
    if(curr.age<21){
        acc.push(curr.firstname)
    }
    return acc
},[])

console.log(reducing123)