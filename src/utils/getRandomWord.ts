const word_list: string[] = [
    'cream', 'tiger', 'drums', 'stuff', 'igloo',
    'ranch', 'prove', 'breed', 'shave', 'broom',
]

function getRandomWord() {
    return word_list[Math.floor(Math.random()*word_list.length)];
}

export { getRandomWord }