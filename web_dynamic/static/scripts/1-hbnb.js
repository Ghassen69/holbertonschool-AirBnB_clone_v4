document.addEventListener("DOMContentLoaded", function() {
  const selectedAmenities = {};
  document.addEventListener("change", function(event) {
    if (event.target.matches("input[type='checkbox']")) {
      const checkbox = event.target;
      if (checkbox.checked) {
        selectedAmenities[checkbox.dataset.id] = checkbox.dataset.name;
      } else {
        delete selectedAmenities[checkbox.dataset.id];
      }
      document.querySelector("div.amenities h4").innerHTML =
        Object.values(selectedAmenities).join(", ") || "&nbsp;";
    }
  });
});