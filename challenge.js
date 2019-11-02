

function updateCounter () {
    let counter = document.getElementById('counter')
    setInterval(()=> {
        counter.innerText = parseInt(counter.innerText) + 1
    }, 1000)
}

function updateIncrement() {
    let incrementBtn = document.getElementById('+')
    let counter = document.getElementById('counter')
    let n = 0

    incrementBtn.addEventListener("click", (event) => {
        if (event) {
            counter.innerText = ++n
        }
    })
}

function updateDecrement() {
    let decrementBtn = document.getElementById('-')
    let counter = document.getElementById('counter')
    let n = 0

    decrementBtn.addEventListener("click", (event) => {
        if (event) {
            counter.innerText = --n
        }
    })
}

function like() {
    let heartButton = document.getElementById('<3') 
    let likeUl = document.querySelector('.likes')
    let counter = document.getElementById('counter')
    let likeLi = document.createElement('li')

    heartButton.addEventListener('click', event => {
        likeLi.innerText = counter.innerText + '❤️'

        likeUl.append(likeLi)
    })

}

function pause () {
    let buttonDec = document.getElementById('-')
    let buttonInc = document.getElementById('+')
    let buttonHeart = document.getElementById('<3')
    let pauseBtn = document.getElementById('pause')

    pauseBtn.addEventListener('click', event => {
        if (event) {
            buttonDec.disabled = true
            buttonInc.disabled = true
            buttonHeart.disabled = true 
        }
    })
}

function leaveComments() {
    let commentForm = document.getElementById('comment-form')
    let commentDiv = document.getElementById('list')

    commentForm.addEventListener("submit", event => {
        event.preventDefault()

        let textString = event.target.firstElementChild.value
        let commentH5 = document.createElement('h5')
        commentH5.innerText = textString

        commentDiv.append(commentH5)
    })
}

updateCounter()
updateIncrement()
updateDecrement()
like()
pause()
leaveComments()