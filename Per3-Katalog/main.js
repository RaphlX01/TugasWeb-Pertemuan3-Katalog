// =========================================
// 1. NAVBAR HAMBURGER TOGGLE (Mobile)
// =========================================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

// =========================================
// 2. DARK MODE TOGGLE (Bonus)
// =========================================
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');

    // Simpan preferensi ke localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    }
});

// Cek preferensi saat halaman dimuat
if (
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
    themeToggle.textContent = '☀️';
}