const darkLight = document.querySelector("#darkLight");
const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");

// Fonction pour basculer entre les modes clair et sombre
darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

// Ajouter un écouteur d'événements à l'icône pour fermer le sidebar
darkLight.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  }
});
