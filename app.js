const toggles = document.querySelectorAll('.faq-toggle')
const text = document.querySelector('.faq-text')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})
