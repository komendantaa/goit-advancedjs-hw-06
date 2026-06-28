/*
  Виправте тип у аргументі функції так, щоб не було помилок типу.
  Partial<User> робить усі поля необов'язковими, тож можна передавати лише частину з них.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};
