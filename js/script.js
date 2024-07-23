let acc = document.getElementsByClassName("accordion");

let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        let pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
            panel.style.maxHeight = null
        } else {
            pannel.style.display = "block";
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.transition = "max-height 0.7s ease-in-out";
        }
    });
}