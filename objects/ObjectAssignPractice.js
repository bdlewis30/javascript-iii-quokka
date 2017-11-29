var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

// var thunderPerson = Object.assign(person, thundercat)
// thunderPerson

// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object
var thunderPerson = Object.assign({}, person, thundercat)
thunderPerson

// Make a copy of a person that is a smurf

smurfPerson = Object.assign({}, person, smurf)
smurfPerson

// Make a copy of a person that is a smurf then a thundercat

var x = Object.assign({}, smurf, thundercat)
x

// Make a copy of a person that is a thundercat then a smurf
var x = Object.assign({}, thundercat, smurf)
x