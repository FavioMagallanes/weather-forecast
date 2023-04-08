export const formatDate = (date: string): string => {
  const day = new Date(date).toLocaleString('es-ES', { weekday: 'long' });
  const dayNumber = new Date(date).toLocaleString('es-ES', {
    day: 'numeric',
    month: 'long',
  });
  return `${day},${dayNumber}`;
};
