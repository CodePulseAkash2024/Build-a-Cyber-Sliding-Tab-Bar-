const items = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".active-indicator");

items.forEach((item, index) => {
  item.addEventListener("click", () => {

    items.forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    indicator.style.transform =
      `translateX(${index * 100}%)`;
  });
});