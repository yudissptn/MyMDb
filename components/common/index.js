
export const dateNow = (dateString) => {
    const date = String(dateString.getDate());
    const month = String(dateString.getMonth() + 1).length < 2 ? '0'.concat(String(dateString.getMonth() + 1)) : String(dateString.getMonth() + 1);
    const year = String(dateString.getFullYear());

    return { now: year + '-' + month + '-' + date, endYear: year + '-12-31' }
}
