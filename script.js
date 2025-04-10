const search = document.getElementById("search");
const toolCards = document.querySelectorAll(".tool-card");

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  toolCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const visible = title.includes(query);
    card.style.display = visible ? "block" : "none";
  });
});
