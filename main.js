const target = document.querySelector('nav');

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
        const element = document.getElementById('fixed-nav');
        element.style.top = e.isIntersecting ? "-100px" : "0";
    })
});

io.observe(target);