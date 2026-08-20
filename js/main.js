(function () {
            var header = document.getElementById('site-header');
            var hero = document.querySelector('.hero-section');
            if (!header || !hero) return;

            window.addEventListener('scroll', function () {
                var threshold = hero.offsetHeight - header.offsetHeight - 20;
                if (window.scrollY > threshold) {
                    header.classList.remove('header-over-hero');
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.add('header-over-hero');
                    header.classList.remove('header-scrolled');
                }
            }, { passive: true });
        })();

    // Animación BIDIRECCIONAL de la imagen de contacto
    (function () {
        var section = document.getElementById('contacto-social');
        var el = document.getElementById('contact-img-anim');
        if (!section || !el) return;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    el.classList.add('visible');
                } else {
                    el.classList.remove('visible');
                }
            });
        }, { threshold: 0.15 });
        observer.observe(section);
    })();
// Mobile menu logic
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            });
        });
    }
});

// Cookie Banner Logic
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-accept-cookies');
    const btnReject = document.getElementById('btn-reject-cookies');
    const mapIframe = document.getElementById('google-map-iframe');
    const mapPlaceholder = document.getElementById('map-placeholder');
    const btnAcceptMap = document.getElementById('btn-accept-map-cookies');
    
    const COOKIE_NAME = 'nanay_cookie_consent';

    function checkCookieConsent() {
        return localStorage.getItem(COOKIE_NAME);
    }

    function setCookieConsent(value) {
        localStorage.setItem(COOKIE_NAME, value);
        hideBanner();
        if (value === 'accepted') {
            loadMap();
        }
    }

    function hideBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('translate-y-full');
            setTimeout(() => {
                cookieBanner.classList.add('hidden');
            }, 500);
        }
    }

    function showBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('hidden');
            setTimeout(() => {
                cookieBanner.classList.remove('translate-y-full');
            }, 50);
        }
    }

    function loadMap() {
        if (mapIframe && mapIframe.dataset.src) {
            mapIframe.src = mapIframe.dataset.src;
            mapIframe.style.opacity = '1';
            if (mapPlaceholder) {
                mapPlaceholder.style.display = 'none';
            }
        }
    }

    const consent = checkCookieConsent();
    if (!consent) {
        showBanner();
    } else if (consent === 'accepted') {
        loadMap();
    }

    if (btnAccept) {
        btnAccept.addEventListener('click', () => setCookieConsent('accepted'));
    }
    
    if (btnReject) {
        btnReject.addEventListener('click', () => setCookieConsent('rejected'));
    }

    if (btnAcceptMap) {
        btnAcceptMap.addEventListener('click', () => {
            setCookieConsent('accepted');
        });
    }
});
