function initializeList(listSelector, btnSelector, itemState) {
  const list = document.querySelector(listSelector);
  const items = list.querySelectorAll(".tariff-item");

  // Заповнюємо масив станом елементів
  items.forEach((item, index) => {
    if (index > 2) {
      item.style.display = "none";
      itemState[index] = "none";
    } else {
      itemState[index] = "block";
    }
  });

  const btn = document.querySelector(btnSelector);

  btn.addEventListener("click", () => {
    items.forEach((item, index) => {
      // Перевіряємо стан елемента
      if (itemState[index] === "none") {
        item.style.display = "block";
        itemState[index] = "block";
      } else if (index > 2) {
        // Ми ховаємо тільки ті елементи, які були приховані спочатку
        item.style.display = "none";
        itemState[index] = "none";
      }
    });
  });
}

function resetListVisibility(listSelector) {
  const list = document.querySelector(listSelector);
  const items = list.querySelectorAll(".tariff-item");
  items.forEach((item) => {
    item.style.display = "block";
  });
}

function handleResize() {
  // Створюємо два масиви для зберігання стану елементів
  let itemStateFirst = [];
  let itemStateSecond = [];

  if (window.innerWidth < 1280) {
    initializeList(
      ".tariff-list-first",
      ".tariff-show-more-btn-first",
      itemStateFirst
    );
    initializeList(
      ".tariff-list-second",
      ".tariff-show-more-btn-second",
      itemStateSecond
    );
  } else {
    resetListVisibility(".tariff-list-first");
    resetListVisibility(".tariff-list-second");
  }
}

window.onload = handleResize;
window.onresize = handleResize;
