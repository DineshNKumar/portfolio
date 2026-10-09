document.getElementById('year').textContent = new Date().getFullYear();

// Paste the file ID from your Drive share link (drive.google.com/file/d/<ID>/view)
const RESUME_FILE_ID = '1uVfYZNFtO9C89SwQItgjHNK3fOPfU7z2';

const cv = document.getElementById('cvViewer');
if (RESUME_FILE_ID && cv) {
    cv.src = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
    cv.hidden = false;
    document.getElementById('cvOpen').href = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
}
