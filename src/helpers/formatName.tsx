export default function formatBreedName(rawBreedName: string) {
    rawBreedName = rawBreedName.replace('-', ' ');

    // Deal with corner cases that come poorly formatted from the API.
    if (rawBreedName === "germanshepherd") {
        return "German Shepherd";
    }
    if (rawBreedName === "mexicanhairless") {
        return "Mexican Hairless";
    }
    if (rawBreedName === "shihtzu") {
        return "Shih Tzu";
    }
    if (rawBreedName === "stbernard") {
        return "St. Bernard";
    }
    if (rawBreedName === "australian shepherd" || rawBreedName === "finnish lapphund") {
        rawBreedName = rawBreedName.split(" ").reverse().join(" ");
    }

    // Capitalize first letter of each word.
    let words = rawBreedName.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    // If breed name has 2 words (e.g. Afghan Hound, which at this point in the codewould be "Hound Afghan"), invert words array.
    if (words.length === 2) {
        words.reverse();
    }

    return words.join(" ");
}