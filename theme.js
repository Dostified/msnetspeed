// MS Net Speed Website Theme Switcher
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('msnetspeed-web-theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️ Light';
    } else {
        if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙 Dark';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('msnetspeed-web-theme', isDark ? 'dark' : 'light');
            themeToggleBtn.innerHTML = isDark ? '☀️ Light' : '🌙 Dark';
        });
    }
});
