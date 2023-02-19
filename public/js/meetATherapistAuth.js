const numberInput = document.getElementById("numberInput");
const numberSubmit = document.getElementById("numberSubmit");
const otpInput = document.getElementById("otpInput");
const otpSubmit = document.getElementById("otpSubmit");
const mainContent = document.getElementById("main-content");
const verification = document.getElementById("verification");
const modal = document.getElementById("modal")



numberSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    numberInput.classList.add("hidden")
    otpInput.classList.toggle("hidden")

    console.log('remove number')
})

otpSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.toggle("hidden")
})


modal.addEventListener("click", (e) => {
    otpInput.classList.toggle("hidden")
    modal.classList.toggle("hidden");
    mainContent.classList.toggle("hidden");
    mainContent.classList.toggle("flex");

})