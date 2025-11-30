document.addEventListener("DOMContentLoaded", () => {

    const introTitle = document.querySelector(".intro-title");
    const openBtn = document.querySelector(".open-btn");
    const calc = document.querySelector(".main-container");
    const text = document.querySelector(".text");
    const btns = document.querySelectorAll(".buttons button");

    /* OPEN CALCULATOR */
    openBtn.addEventListener("click", () => {
        introTitle.classList.add("title-small");

        openBtn.style.opacity = "0";
        openBtn.style.pointerEvents = "none";

        setTimeout(() => {
            calc.classList.add("main-show");
        }, 300);
    });


    /* CALC LOGIC */
    function press(v) {
        if (v === "AC") text.value = "";
        else if (v === "=") {
            try {
                text.value = eval(text.value.replace(/X/g, "*").replace(/÷/g, "/"));
            } catch {
                text.value = "Error";
            }
        } else text.value += v;
    }

    /* MOUSE CLICK FIX */
    btns.forEach(b => {
        b.addEventListener("mousedown", e => {
            e.preventDefault();
            animate(b);
            press(b.textContent);
        });
    });


    /* KEYBOARD FIX (NO DOUBLE/TRIPLE INPUT) */
    document.addEventListener("keydown", e => {

        if (e.repeat) return;   // ⭐ BIG FIX – stops auto-repeat spam

        const map = { "*": "X", "/": "÷", Enter: "=", Backspace: "AC" };
        let v = map[e.key] || e.key;

        let btn = [...btns].find(b => b.textContent === v);
        if (btn) {
            animate(btn);
            press(v);
        }
    });

    function animate(b) {
        b.classList.add("active");
        setTimeout(() => b.classList.remove("active"), 140);
    }

});

openBtn.addEventListener("click", () => {

    introTitle.classList.add("title-small");

    openBtn.style.opacity = "0";
    openBtn.style.pointerEvents = "none";

    setTimeout(() => {
        calc.classList.add("main-show");
    }, 300);
});

