export const randomItem = <T,>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};

export const nextItem = <T,>(items: T[], current: T): T => {
  const index = items.indexOf(current);
  return items[(index + 1) % items.length];
};

export const previousItem = <T,>(items: T[], current: T): T => {
  const index = items.indexOf(current);
  return items[(index + items.length - 1) % items.length];
};
