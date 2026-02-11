//GHOST CURSOR SCRIPT
const ua = navigator.userAgent.toLowerCase();
const isAndroid = ua.includes("android");
const isIOS = /iphone|ipad|ipod/.test(ua);

// Προσθέτει class στο <html> για να ξέρει το CSS τι συσκευή είναι
document.documentElement.classList.toggle("os-android", isAndroid);
document.documentElement.classList.toggle("os-ios", isIOS);

// Ανιχνεύει αν η οθόνη είναι αφής (touch)
const isTouch = matchMedia("(pointer: coarse)").matches;
document.documentElement.classList.toggle("is-touch", isTouch);

// ΣΗΜΑΝΤΙΚΟ: Κρύψε το φαντασματάκι αν είναι κινητό αλλιώς:
if (!isTouch) {
    document.addEventListener('mousemove', (e) => {
        const ghost = document.querySelector('.ghost-cursor');
        if (ghost) {
            ghost.style.transform = `translate(${e.clientX - 40}px, ${e.clientY - 30}px)`;
        }
    });
}