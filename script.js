function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("body-content").innerHTML = data;
    });
}

// Load the home page by default
loadPage("pages/home.html");
