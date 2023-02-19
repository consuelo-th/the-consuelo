
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal"); 
const closeModal = document.querySelectorAll(".closeModal");

closeModal.forEach(btn => {
    btn.addEventListener("click", () => {
        toggleModal(modal, "hidden")
    })
});

openModal.addEventListener("click", () => {
    toggleModal(modal, "hidden")
})

function toggleModal(elem, className) {
    elem.classList.toggle(className)
}