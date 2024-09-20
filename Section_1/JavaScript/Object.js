const student = {
    name : 'Anish',
    age : 22,
    email : 'anishkumargvm02@gmail.com',
    mobile : 9729706784
}
console.log(student)
//to access the values of the object throught the 
console.log(student.name)       //key value : name



student.email = 'john456@gmail.com'
console.log(student)



//adding new key value pair to the object
student.city = 'Bangalore'
console.log(student)



console.log("-----------------------------------------")
const smartphones = {
    "brand" : "Samsung",
    "Model" : "Galaxy S21",
    "Price" : 70000,
    "color" : ["red", "white", "black", "blue"]
}


console.log(smartphones)
console.log(smartphones.brand)
console.log(smartphones.color[1])
smartphones.color.push("green")
console.log(smartphones)





console.log("-----------------------------------")
const phones = [
    {brand : "Samsung", model : "Galaxy S21", price : 70000, color: ["red", "white", "black", "blue"]},
    {brand : "Apple", model : "Iphone 13", price : 80000, color: ["red", "white", "black", "blue"]},
    {brand : "OnePlus", model : "81", price : 45000, color: ["red", "white", "black", "blue"]},
    {brand : "Xiaomi", model : "Mi 10", price : 35000, color: ["red", "white", "black", "blue"]}
       
]

console.log(phones[1].model)
console.log(phones[2].color[2])