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

  fetch("http://0.0.0.0:5001/api/v1/status/")
    .then(response => response.json())
    .then(data => {
      if (data.status === "OK") {
        document.querySelector("div#api_status").classList.add("available");
      } else {
        document.querySelector("div#api_status").classList.remove("available");
      }
    });
});
