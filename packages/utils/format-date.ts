export function formatDate(date: Date, format: string): string {
    const map: { [key: string]: string } = {
        'MM': ('0' + (date.getMonth() + 1)).slice(-2),
        'DD': ('0' + date.getDate()).slice(-2),
        'YYYY': date.getFullYear().toString(),
        'HH': ('0' + date.getHours()).slice(-2),
        'mm': ('0' + date.getMinutes()).slice(-2),
        'ss': ('0' + date.getSeconds()).slice(-2),
    };

    return format.replace(/MM|DD|YYYY|HH|mm|ss/gi, matched => map[matched]);
}