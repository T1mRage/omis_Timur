
document.getElementById('test')
let box = document.getElementById('test')

let btn = document.querySelector('button[type="button"]')
btn.addEventListener('click', event => {
    //console.log('click')
    box.style.backgroundColor = 'red'
    

})

btn.addEventListener('dblclick', event => {
    console.log('dblclick')
})

let left = 10
setInterval(()=> {
    console.log('interval')
    left += 10
    box.style.left = left + 'px'
}, 1000)

