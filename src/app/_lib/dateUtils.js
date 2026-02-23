export function DateSetter(unFormattedDate) {
    const date = new Date(unFormattedDate);
    const options = { day: '2-digit', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-GB', options).toUpperCase().replace('.', '');
    return formattedDate;
}
