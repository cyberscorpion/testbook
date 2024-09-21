let buttonRef = document.getElementById("mybtn")
buttonRef.addEventListener('click', myFunction)

function myFunction() {
    // alert("hello")
    let inputVal1 = Number(document.getElementById("num1").value);
    let inputVal2 = Number(document.getElementById("num2").value);
    let result = inputVal1 + inputVal2
    document.getElementById("result").value = result
    let buttonRef = document.getElementById("mybtn")
    buttonRef.removeEventListener('click', myFunction)

}