document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion__title");
    const accordionBody = item.querySelector(".accordion__content");
    const accordionIcon = accordionHeader.children[0];

    accordionHeader.addEventListener("click", (e) => {
      e.preventDefault();
      if (!accordionBody.classList.contains("show")) {
        closeAllAccordionItems(accordionItems);
      }
      accordionBody.classList.toggle("show");
      accordionIcon.src = accordionBody.classList.contains("show")
        ? "assets/images/icon-minus.svg"
        : "assets/images/icon-plus.svg";
    });
  });
});

function closeAllAccordionItems(items) {
  items.forEach((item) => {
    const accordionHeader = item.querySelector(".accordion__title");
    const accordionBody = item.querySelector(".accordion__content");
    const accordionIcon = accordionHeader.children[0];
    accordionBody.classList.remove("show");
    accordionIcon.src = "assets/images/icon-plus.svg";
  });
}
