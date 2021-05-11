//('') - string

let name = 'Timur'
console.log('My name :', name)

console.log(typeof name)
console.log(typeof 10)
console.log(typeof true) //false
console.log(typeof undefined) // empty
console.log(typeof [])
console.log(typeof {})

name = 10



console.log('result', name + 25) // concatenation

let str = 'text'

console.log('result', str + 25, 25 + str)


let cars = ['audi', 10, true, name, undefined]


function getX(x, y) {
    console.log('this is function. ', 'Variable: ', x, 'y: ', y)
}
getX(10, 5)

function getY(x, y) {
    //console.log('this is function. ', 'Variable: ', x,'y = ',y)
    //todo
    return 'this is function. ' + 'Variable: ' + x, 'y: ' + y
}

let result = getY('return Y', 'return Y')
console.log('result: ', result)

if (getY('return Y', 'return Y').length > 5) {
    // alert('ok')
}
// ES6 - web3
let getZ = () => 'this is short fn'
console.log(getZ())

let getZ2 = (x, y) => 'this is short fn ' + x + ', y = ' + y
console.log(getZ2(15, 555))


let getZ3 = (x, y) => {
    console.log('this is function. ', 'x: ', x, ' y: ', y)
    return 'this is short fn ' + x + ', y = ' + y
}
console.log(getZ2(15, 555))

let cars2 = [
    {
        title: 'My title',
        description: 'good title',
        carnumber: 100,
        isnewcar: true
    }
]

//car = []
cars2.forEach(element => { //callback
    console.log('123123: ' + element.title + '|' + element.description)

});

