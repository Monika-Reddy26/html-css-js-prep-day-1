const button = document.getElementById("completebtn")
const message = document.getElementById("statusmessage")
button.addEventListener("click", function () {
  message.textContent = "Great job!You successfully completed day 1."
  button.disabled = true;
  button.textContent = "Completed";
  message.style.color = "green";
})
