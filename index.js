const input = document.querySelector("input");
const errorMsg = document.querySelector("span.error");

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value.includes("@gmail.com")) {
    input.classList.add("error");
    errorMsg.removeAttribute("hidden");
  }
});

input.addEventListener("input", () => {
  if (input.classList.contains("error")) {
    input.classList.remove("error");
    errorMsg.setAttribute("hidden", true);
  }
});
