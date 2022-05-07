export default function formatBreedName(rawBreedName: string) {
    rawBreedName = rawBreedName.replace('-', ' ');

    // Deal with corner case of breed German Shepherd, which comes from Dog API as "germanshepherd".
    if (rawBreedName === "germanshepherd") {
        return "German Shepherd";
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


    // TO DO: Deal with rest of corner cases: australian shepherd, norwegian buhund...
}