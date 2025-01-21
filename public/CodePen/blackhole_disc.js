export function createBlackHoleDisc() {
    // Diminuído o raio do disco de 5 para 3
    return new THREE.TorusGeometry(3, 1, 0, 64, 10, true);
}
