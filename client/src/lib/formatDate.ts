export const FormatDate = (date: string) => {
    const stringDate = new Date(date);

    return new Intl.DateTimeFormat('ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(stringDate);
};
