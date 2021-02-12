(() => {
    const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];

    let index = 0;

    function onKeyDown(e) {
        e.key === konamiCode[index] ? index++ : (index = 0);
        console.log(e.key);

        if (konamiCode.length === index) {
            startSnowing();
        }
    }

    function run() {
        document.addEventListener("keydown", onKeyDown);
    }
    run();
})();
