function errorEmail() {
    error = document.querySelector('span.span-error')
    errorInput = document.querySelector('input')
    errorInput.style.border = '1px solid hsl(354, 80%, 58%)'
    error.innerHTML = 'Please provid a valid email address'
    error.style.display = 'block'
    
}

function validEmail() {
    valid = document.querySelector('span.span-error')
    valid.style.display = 'none'
}