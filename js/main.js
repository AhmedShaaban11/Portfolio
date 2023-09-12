let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    link.addEventListener('click', () => {
        if (section.classList.contains('visible-section') !== false) { return; }
        let visibleSection = document.querySelector('.visible-section');
        visibleSection.classList.remove('visible-section');
        section.classList.add('visible-section');
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
