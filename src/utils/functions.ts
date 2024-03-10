export const getRandomId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = '0123456789';
    let results = "";

    for(let i = 0; i < 2; i++) {
        results += letters[Math.floor(Math.random() * letters.length)];
    }

    for(let i = 0; i < 4; i++) {
        results += numbers[Math.floor(Math.random() * numbers.length)];
    }

    return results;
};