console.log("Hi Mom");

// Form Element

const button = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

button.addEventListener("click", () => {
  //   console.log("Hi Mom");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    button.textContent = "Close";
  } else {
    form.classList.add("hidden");
    button.textContent = "Share a fact";
  }
});
