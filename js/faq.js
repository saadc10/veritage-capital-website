function toggleFAQ(element) {
    const isOpen = element.classList.contains('open');

    if (!isOpen) {
        element.classList.add('open');
        element.querySelector('.faq-toggle').textContent = '+';
        element.querySelector('.faq-toggle').style.transform = 'rotate(45deg)';
    } else {
        element.classList.remove('open');
        element.querySelector('.faq-toggle').textContent = '+';
        element.querySelector('.faq-toggle').style.transform = 'rotate(0deg)';
    }
}
