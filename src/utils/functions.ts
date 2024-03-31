export const getRandomId = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let results = "";

    for(let i = 0; i < 2; i++) {
        results += letters[Math.floor(Math.random() * letters.length)];
    }

    for(let i = 0; i < 4; i++) {
        results += numbers[Math.floor(Math.random() * numbers.length)];
    }

    return results;
};

export const formatPrice = (price: number | undefined, digits: number) => {
    return price?.toFixed(digits);
};

export const formatDate = (date: string | undefined, format: string) => {

    if(typeof date === "undefined") {
        return;
    }

    const newDate = new Date(date);
    const formatedDate = newDate.toLocaleDateString(format, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    let day;
    let month;
    let year;

    if(format === "en-EN") {
        day = formatedDate.split(" ")[1].replace(",", "");
        month = formatedDate.split(" ")[0];
        year = formatedDate.split(" ")[2];
    }

    if(format === "fr-FR") {
        day = formatedDate.split(" ")[0];
        month = formatedDate.split(" ")[1].replace(".", "");
        year = formatedDate.split(" ")[2];
    }

    return `${day} ${month} ${year}`;
};