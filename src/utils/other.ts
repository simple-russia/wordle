
const concatClassnames = (...classArr: string[]): string => {
    return classArr.filter( i => Boolean(i)).join(' ');
}

export { concatClassnames }