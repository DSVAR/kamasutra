export const requiredField = value => {

    if (!value) {
        return 'error message';
    } else {
        return undefined;
    }
}
export const minLenght = (count) => (value) => {
    if (value !== undefined)
        if (value.length < count) {
            return 'NEED MORE SYMBOLS';
        } else {
            return undefined;
        }
}