document.addEventListener('DOMContentLoaded', () => {
    // Function to handle image gallery display
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const img = document.createElement('img');
            img.src = image.src;
            modal.appendChild(img);
            document.body.appendChild(modal);
            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });

    // Function to highlight competition winners
    const competitionItems = document.querySelectorAll('.competition-item');
    competitionItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlight');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('highlight');
        });
    });

    // Function to showcase trophies
    const trophyItems = document.querySelectorAll('.trophy-item');
    trophyItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Trophy: ${item.dataset.trophyName}`);
        });
    });
});