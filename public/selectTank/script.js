const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let tankJSON = {
        name : formData.get("name"),
        color : formData.get("color")
    }

    localStorage.setItem("tank", JSON.stringify(tankJSON));

    window.location.replace("/public/game");
}
)