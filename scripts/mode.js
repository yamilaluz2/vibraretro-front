document.addEventListener("DOMContentLoaded", () => {
    const checkMode = document.getElementById("mode_button");
    const body = document.body;

    let mode = localStorage.getItem("mode") || "light";

    body.classList.add(mode);

    checkMode.checked = (mode === "dark");

    checkMode.addEventListener("change", () => {
        const enabledDark = checkMode.checked;
        const newMode = enabledDark ? "dark" : "light";

        localStorage.setItem("mode", newMode);

        body.classList.remove("dark", "light");
        body.classList.add(newMode);

    });
});