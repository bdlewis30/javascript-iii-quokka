var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'

for(var key in drink){
    var val = drink[key]
    if( val === 'orange')
    drink[key] = 'cherry'
}
console.log(drink.color)
console.log(drink.taste)
console.log(drink.brand)

//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy