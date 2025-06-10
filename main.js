document.addEventListener('DOMContentLoaded', function () {
    const keyDisplay = document.getElementById('key');
    const keyInfoDisplay = document.getElementById('key-info');

    document.addEventListener('keydown', function (event) {
        // Mencegah aksi default untuk tombol tertentu (seperti F5 untuk refresh)
        if ([
            'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
            'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
        ].includes(event.key)) {
            event.preventDefault();
        }

        // Menampilkan tombol yang ditekan
        keyDisplay.textContent = `Tombol: ${event.key}`;

        // Menampilkan informasi tambahan
        keyInfoDisplay.innerHTML = `
                    <div>Key Code: ${event.keyCode || event.which}</div>
                    <div>Code: ${event.code}</div>
                    <div>Shift: ${event.shiftKey ? 'Ditekan' : 'Tidak'}</div>
                    <div>Ctrl: ${event.ctrlKey ? 'Ditekan' : 'Tidak'}</div>
                    <div>Alt: ${event.altKey ? 'Ditekan' : 'Tidak'}</div>
                    <div>Meta: ${event.metaKey ? 'Ditekan' : 'Tidak'}</div>
                `;
    });

    // Reset display jika tidak ada tombol yang ditekan selama beberapa detik
    let timeout;
    document.addEventListener('keyup', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            keyDisplay.textContent = 'Tekan tombol apa saja...';
            keyInfoDisplay.textContent = '';
        }, 3000);
    });
});