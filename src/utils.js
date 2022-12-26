export function getRandomColor() {
    const lettersList = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += lettersList[Math.floor(Math.random() * 16)];
    }
    return color;
}