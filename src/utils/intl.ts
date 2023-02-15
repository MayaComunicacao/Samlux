export const formatDateToHumanDates = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo'
  }).format(date);
};
