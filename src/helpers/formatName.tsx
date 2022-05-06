export default function formatBreedName(rawBreedName: string) {
    rawBreedName = rawBreedName.replace('-', ' ');
    let words = rawBreedName.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}