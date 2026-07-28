document.addEventListener("DOMContentLoaded", () => {

    const target = document.getElementById("typing-text");

    if (!target) return;

    const text = "whoami";

    let i = 0;

    function type() {

        if (i < text.length) {

            target.textContent += text.charAt(i);

            i++;

            setTimeout(type, 120);

        }

    }

    type();

});