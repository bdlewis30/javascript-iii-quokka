## Destructuring

### Destructuring is a shortcut for pulling properties off of an object

#### move the property name(s) from the dot notation on the right into the curly braces on the left

```
var name = employee.first_name;
//becomes
var {first_name} = employee
```

##### can get multiple variables

```
var person = {
    first_name: 'Dan',
    last_name: 'Peterson',
    age: 50,
    city: 'Portland',
    state: 'OR',
    favColor: 'Red',
    favFood: 'Pizza'
}

var { first_name
    , last_name
    , age
    , city
    , state
    } = person;

// This says, get the variables on the left from the object up top called person.
```

##### variable names must match

``` 
var object = {
    x: 7,
    y: 8
}

//Yup 
var { x } = object; 

//Nope
var { newX } = object;
```

### Destructuring is triggered by curly braces on the left side of an assignment

##### for var & let

`var { age } = person;`

`let { age } = person;`

##### in function parameters

```
function isOldEnough({age}){}

isOldEnough({name: "Higel", age: 20, eyeColor: 'brown'})
```

##### in a function

```
function isOldEnough(person){
    var {age, eyeColor} = person;
}

var obj = {name: "Higel", age: 20, eyeColor: 'brown'}
isOldEnough(obj)
```

##### in an import statement

`import { age } from './person'`
