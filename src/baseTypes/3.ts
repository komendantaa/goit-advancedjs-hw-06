// Що потрібно виправити, щоб код став правильним та безпечним?
// Не можна присвоювати unknown безпосередньо string. Потрібно звузити тип
// (type narrowing) через перевірку або застосувати явне приведення (type assertion).

let some: unknown;
some = 'Text';
let str: string;

// Безпечний варіант — звузити тип через перевірку:
if (typeof some === 'string') {
  str = some;
}

export {};
