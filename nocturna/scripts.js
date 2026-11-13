const boton = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
        menu.classList.toggle("hidden");

    const estaAbierto = !menu.classList.contains("hidden");
    boton.setAttribute("aria-expanded", estaAbierto );
  
});
