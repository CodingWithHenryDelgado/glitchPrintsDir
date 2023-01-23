const strength = document.getElementById("strength");
strength.addEventListener("click", function () {
    if (strength.classList.contains("close")) {
        strength.classList.remove("close");
    } else {
        strength.classList.add("close");
    }
})

const detail = document.getElementById("quality");
detail.addEventListener("click", function () {
    if (detail.classList.contains("close")) {
        detail.classList.remove("close");
    } else {
        detail.classList.add("close");
    }
})