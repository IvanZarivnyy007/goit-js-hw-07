const newInput = document.getElementById('name-input')
const newSpan = document.getElementById('name-output')
const anon = 'Anonimus';

newInput.addEventListener('input',(event) => {
    newSpan.innerText = event.target.value.trim() || anon 
})


