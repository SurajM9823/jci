// Navigation HTML
const navHTML = `<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-10 lg:px-40 py-3">
<div class="flex items-center justify-between max-w-[1200px] mx-auto">
<div class="flex items-center gap-3">
<div class="text-primary">
<svg class="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"/>
</svg>
</div>
<div class="flex flex-col">
<h1 class="text-primary text-lg font-bold leading-none tracking-tight">Indrapur Jaycees</h1>
<span class="text-[10px] uppercase tracking-widest font-semibold text-slate-500">JCI Local Chapter</span>
</div>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="index.html">Home</a>
<a class="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="about.html">About</a>
<a class="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="events.html">Events</a>
<a class="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="foundation.html">Foundation</a>
<a class="text-slate-700 dark:text-slate-200 text-sm font-medium hover:text-primary transition-colors" href="team.html">Team</a>
</nav>
<div class="flex items-center gap-4">
<a href="contact.html" class="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20">Contact Us</a>
<button class="md:hidden text-slate-700 dark:text-slate-200">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>`;

const footerHTML = `<footer class="border-t border-slate-200 dark:border-slate-800 py-12 bg-white dark:bg-background-dark/50">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div class="space-y-6">
<div class="flex items-center gap-2">
<div class="text-primary/50">
<svg class="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"/>
</svg>
</div>
<span class="font-bold">Indrapur Jaycees</span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Part of Junior Chamber International, we are a nonprofit organization of young active citizens aged 18 to 40 who are dedicated to creating positive change in our communities.</p>
<div class="flex gap-4">
<a class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-lg">public</span>
</a>
<a class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-lg">alternate_email</span>
</a>
<a class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-lg">share</span>
</a>
</div>
</div>
<div>
<h4 class="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h4>
<ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
<li><a class="hover:text-primary transition-colors" href="index.html">Home</a></li>
<li><a class="hover:text-primary transition-colors" href="about.html">About Us</a></li>
<li><a class="hover:text-primary transition-colors" href="events.html">Events</a></li>
<li><a class="hover:text-primary transition-colors" href="foundation.html">Foundation</a></li>
<li><a class="hover:text-primary transition-colors" href="team.html">Team</a></li>
</ul>
</div>
<div>
<h4 class="text-slate-900 dark:text-white font-bold mb-6">Legal</h4>
<ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
<li><a class="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Constitution</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Cookie Settings</a></li>
</ul>
</div>
<div>
<h4 class="text-slate-900 dark:text-white font-bold mb-6">Contact</h4>
<ul class="space-y-4 text-sm text-slate-500 dark:text-slate-400">
<li class="flex gap-3">
<span class="material-symbols-outlined text-primary text-lg">location_on</span>
<span>Belbari, Morang, Nepal</span>
</li>
<li class="flex gap-3">
<span class="material-symbols-outlined text-primary text-lg">mail</span>
<span>info@indrapurjaycees.org.np</span>
</li>
<li class="flex gap-3">
<span class="material-symbols-outlined text-primary text-lg">call</span>
<span>+977 21-XXXXXX</span>
</li>
</ul>
</div>
</div>
<div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-slate-500 dark:text-slate-400 text-xs">© 2024 Indrapur Jaycees. All Rights Reserved. Developing Leaders for a Changing World.</p>
<div class="text-xs text-slate-400 italic">Junior Chamber International</div>
</div>
</div>
</footer>`;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nav-placeholder').innerHTML = navHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('text-primary', 'font-bold');
            link.classList.remove('text-slate-700', 'dark:text-slate-200');
        }
    });
});
