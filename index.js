document.getElementById('generate-pdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const frontCover = 'assets/front-cover.jpg';
    const backCover = 'assets/back-cover.jpg';
    const pages = [
        'assets/page1.jpg', 'assets/page2.jpg','assets/page3.jpg','assets/page4.jpg','assets/page5.jpg', 'assets/page6.jpg', 'assets/page7.jpg','assets/page8.jpg','assets/page9.jpg','assets/page10.jpg'
    ];

    doc.addImage(frontCover, 'JPEG', 10, 10, 190, 275);
    pages.forEach((page, index) => {
        if (index > 0) doc.addPage();
        doc.addImage(page, 'JPEG', 10, 10, 190, 275);
    });
    doc.addPage();
    doc.addImage(backCover, 'JPEG', 10, 10, 190, 275);

    doc.save('KDP-Book.pdf');
});
