document.getElementById('year').textContent = new Date().getFullYear();

// Paste the file ID from your Drive share link (drive.google.com/file/d/<ID>/view)
const RESUME_FILE_ID = '1uVfYZNFtO9C89SwQItgjHNK3fOPfU7z2';

if (RESUME_FILE_ID) {
    const cv = document.getElementById('cvViewer');
    cv.src = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
    cv.hidden = false;
    document.getElementById('cvOpen').href = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
}

const links = document.querySelectorAll('.nav nav a');
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            links.forEach(l => l.classList.toggle('active', l.hash === '#' + e.target.id));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
