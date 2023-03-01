**Read in other languages: [English](README.en.md), [Українська](README.md).**

# Підготовка проекту

1. Встановлено LTS-версію Node.js.
2. Проект створено за допомогою
   [Create React App](https://github.com/facebook/create-react-app). Для
   ознайомлення та налаштування додаткових можливостей
   [зверніться до документації](https://facebook.github.io/create-react-app/docs/getting-started).
3. Встановленyя базових залежностей проекту виконується командою `npm install`.
4. Запуск режиму розробки виконується командою `npm start`.
5. Сторінка в браузері за адресою
   [http://localhost:3000](http://localhost:3000).

# Критерії приймання

- Створено репозиторій `goit-react-hw-07-phonebook`.
- При здачі домашньої роботи є посилання на вихідні файли та робочі сторінки
  кожного проекту на `GitHub Pages`.
- При запуску коду завдання, в консолі немає помилок та попереджень.
- Для кожного компонента є окрема папка з файлом компонента React та файлом
  стилів.
- Для компонентів описано `propTypes`
- Використана бібліотека `Redux Toolkit`.

## Книга контактів

Виконайте рефакторинг коду завдання «Книга контактів» попереднього модуля.Видали
код, що відповідає за зберігання та читання контактів з локального сховища, та
додай взаємодію з бекендом для зберігання контактів.

### Бекенд

Створи свій персональний бекенд для розробки за допомогою UI-сервісу
[mockapi.io](https://mockapi.io/). Зареєструйся використовуючи свій обліковий
запис GitHub. Створи ресурс `contacts` щоб отримати ендпоінт `/contacts`.
Використай конструктор ресурсу та опиши об'єкт контакту як на ілюстрації.

<a target="_blank" rel="noopener noreferrer" href="/JuliaGolban/goit-react-hw-07-phonebook/blob/main/assets/api.png"></a><img src="/JuliaGolban/goit-react-hw-07-phonebook/raw/main/assets/api.png" alt="component preview" style="max-width: 100%;">
### Форма стану

Додай у стан Redux обробку індикатора завантаження та помилки. Для цього зміни
форму стану.

```jsx
{
   contacts: {
      items: [],
      isLoading: false,
      error: null
   },
      filter: ""
}
```

### Операції

Використовуй функцію
[createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) для
оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. Обробку
екшенів та зміну даних у стані Redux зроби за допомогою
[createSlice](https://redux-toolkit.js.org/api/createSlice).

Оголоси наступні операції:

- `fetchContacts` - одержання масиву контактів (метод GET) запитом. Базовий тип
  екшену `"contacts/fetchAll"`.
- `addContact` - додавання контакту (метод POST). Базовий тип екшену
  `"contacts/addContact"`.
- `deleteContact` - видалення контакту (метод DELETE). Базовий тип екшену
  `"contacts/deleteContact"`.
