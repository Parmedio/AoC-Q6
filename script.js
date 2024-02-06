document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("pixelCanvas");
    const ctx = canvas.getContext("2d");

    // Array di 1000 array, ognuno contenente 1000 elementi con valore 0 o 1
    const pixelData = generatePixelData();

    // Dimensioni del singolo pixel
    const pixelSize = 1;

    // Disegna i pixel in base ai dati
    drawPixels();

    function generatePixelData() {
        const data = [];
        // Genera i valori casuali per i pixel
        for (let i = 0; i < 1000; i++) {
            const row = [];
            for (let j = 0; j < 1000; j++) {
                // Genera casualmente 0 o 1
                row.push({ value: Math.round(Math.random()) });
            }
            data.push(row);
        }
        return data;
    }

    function drawPixels() {
        for (let y = 0; y < 1000; y++) {
            for (let x = 0; x < 1000; x++) {
                // Imposta il colore in base al valore
                ctx.fillStyle = pixelData[y][x].value === 1 ? "white" : "black";
                // Disegna il pixel
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            }
        }
    }
});
