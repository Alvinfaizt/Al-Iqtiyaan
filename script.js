/**
 * Project: Al-Iqtiyaan Dashboard
 * Logic: Event-driven variable update
 */

// Konfigurasi Data
const CONFIG = {
    totalAlumni: 78,
    updateSpeed: 30 // ms
};

// Inisialisasi saat halaman selesai dimuat
window.onload = () => {
    animateCounter('counter', CONFIG.totalAlumni);
};

/**
 * Fungsi untuk animasi angka (Logika perulangan)
 */
function animateCounter(elementId, targetValue) {
    const countElement = document.getElementById(elementId);

    // Safety Check: Pastikan elemen ada di HTML
    if (!countElement) return;

    let current = 0;
    const timer = setInterval(() => {
        if (current < targetValue) {
            current++;
            countElement.innerText = current;
        } else {
            clearInterval(timer); // Hentikan loop jika target tercapai
        }
    }, CONFIG.updateSpeed);
}

/**
 * Fungsi Interaksi Tombol
 */
function showAlert() {
    alert("Halo Al-Iqtiyaan! Sistem sedang dalam tahap pengembangan (v1.0 Beta).");
}