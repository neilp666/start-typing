document.querySelector('textarea').addEventListener('keyup', function() {
    const divs = document.querySelectorAll('div')

    divs.forEach(div => {
        if (this.value != "") {
            div.innerHTML = this.value
        } else {
            div.innerHTML = "Start Typing"
        }
    })
})