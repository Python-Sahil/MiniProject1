document.getElementById("loadButton").addEventListener("click", async () => {
  try {
    const response = await fetch("/api/items");
    if (!response.ok) throw new Error("Network response was not ok");
    const items = await response.json();
    displayItems(items);
  } catch (err) {
    console.error("Fetch error:", err);
    document.getElementById("output").innerText = "Error loading items.";
  }
});

function displayItems(items) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // clear previous
  outputDiv.className = "item-container"; // apply grid layout class

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>Price:</strong> $${item.price}</p>
    `;
    outputDiv.appendChild(card);
  });
}
