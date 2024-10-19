const btn = document.querySelector(".started");
const input = document.querySelector(".enteremail");
btn.onclick = (e) => {
    e.preventDefault();
    input.focus();
}

let buttons = document.querySelectorAll(".questions div .btn .button");

buttons.forEach(bttn => {
    bttn.onclick = () => {
        if(bttn.nextElementSibling.style.display === "none"){
            bttn.nextElementSibling.style.display = "block";
        } else{
            bttn.nextElementSibling.style.display = "none";
        }
    }
})

