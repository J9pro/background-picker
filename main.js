const btn = document.getElementById('btn')

const body = document.querySelector('body')


function changeColor() {
    let r1 = Math.floor(Math.random() * 256)
    let r2 = Math.floor(Math.random() * 256)
    let r3 = Math.floor(Math.random() * 256)

    return `rgb(${r1}, ${r2}, ${r3})`
}

//Event Listener
btn.addEventListener('click', function () {
    const newColor = changeColor()
    document.body.style.backgroundColor = newColor;
    document.getElementById('display').textContent = newColor;
})




