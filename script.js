const shareButton = document.querySelector('.btn--share');
const socialShare = document.querySelector('.social-share');

shareButton.addEventListener('click', () => {
    // Toggle Visible class
    const expanded = socialShare.classList.toggle('visible');
        socialShare.setAttribute('aria-expanded', expanded);
})