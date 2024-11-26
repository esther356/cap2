function calculateShares() {
    let camels = parseInt(document.getElementById('camels').value);
    if (!camels || camels < 1) {
        document.getElementById('result').innerText = 'Por favor, introduce un número válido de camellos.';
        return;
    }

    // Add the additional camel
    camels += 1;
    
    const firstBrother = Math.floor(camels / 2);
    const secondBrother = Math.floor(camels / 3);
    const thirdBrother = Math.floor(camels / 9);
    const totalUsed = firstBrother + secondBrother + thirdBrother;
    const remaining = camels - totalUsed;

    document.getElementById('result').innerText = 
        Primer hermano: ${firstBrother} camellos\nSegundo hermano: ${secondBrother} camellos\nTercer hermano: ${thirdBrother} camellos\n\nCamello sobrante: ${remaining};
}