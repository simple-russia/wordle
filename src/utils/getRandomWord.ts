const word_list: string[] = [
    'cream', 'tiger', 'drums', 'stuff', 'igloo',
    'ranch', 'prove', 'breed', 'shave', 'broom',
    'shrek', 'alarm', 'minus', 'minor', 'react',
    'codes', 'swear', 'mails', 'meets', 'croak',
    'clown', 'boost', 'music', 'track', 'disco',
    'dance', 'dread', 'corny', 'chess', 'moral',
]

function getRandomWord() {
    return word_list[Math.floor(Math.random()*word_list.length)];
}

export { getRandomWord }