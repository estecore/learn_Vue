# EN

# Expecting Positive Events

This project is a simple Vue.js application that helps users assess their expectations for positive future events. The application prompts users to rate their agreement with various statements on a scale of 0 to 100. Based on their ratings, the app calculates a total score and provides an overall rating that categorizes the user as either "lucky," "neutral," or "unlucky."

## Features

- **Dynamic User Input**: Users can slide a range input to provide a value between 0 and 100 for each statement.
- **Total Score Calculation**: The app automatically computes the total score based on the user's input values.
- **Luck Level Determination**: The app assigns users a "lucky," "neutral," or "unlucky" category based on their average score.
- **Real-time Updates**: The displayed total score and luck level updates instantly as users adjust their inputs.

## Project Structure

- **HTML**: The project consists of a single HTML file that includes the Vue.js app and a form for user input.
- **CSS**: Styling is applied using an external CSS file that defines the look of the page, including color-coding for different luck levels.
- **JavaScript**: The app logic is written in Vue.js, and handles input from users, computes the total score, and displays results dynamically.

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/expecting-positive-events.git
```

2. Navigate to the project directory:

```
cd expecting-positive-events
```

3. No build tools or additional packages are required as this is a simple Vue.js project that runs directly in the browser.

## Usage

1. Open the `index.html` file in your web browser.
2. Adjust the slider for each statement to reflect your expectations for positive events.
3. Observe the total score and your computed luck level update in real time as you interact with the sliders.

## Example Statements

The app provides a set of statements, such as:

1. Sooner or later you will hear from someone that you are talented.
2. You look younger than your age.
3. You'll have a great time on your next holiday.

Each statement has a slider where users can select a value from 0 to 100 representing how much they agree with the statement.

## Luck Levels

Based on the average of your ratings, the app will classify you into one of three categories:

- **Lucky**: A score greater than 80, colored green.
- **Neutral**: A score between 46 and 80, colored gray.
- **Unlucky**: A score below 45, colored red.

## Customization

You can modify the statements or any other logic by editing the `app.js` file. The array `text` holds all the statements, and you can add or remove items from this list to customize the assessment.

## Technologies Used

- **Vue.js**: For building the reactive user interface.
- **HTML/CSS**: For structuring and styling the webpage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

# RU

# Ожидание позитивных событий

Этот проект представляет собой простое приложение Vue.js, которое помогает пользователям оценить свои ожидания позитивных будущих событий. Приложение предлагает пользователям оценить свое согласие с различными утверждениями по шкале от 0 до 100. На основе их оценок приложение вычисляет общую оценку и предоставляет общий рейтинг, который классифицирует пользователя как «удачливого», «нейтрального» или «неудачливого».

## Функции

- **Динамический пользовательский ввод**: пользователи могут перемещать диапазон ввода, чтобы предоставить значение от 0 до 100 для каждого утверждения.
- **Вычисление общей оценки**: приложение автоматически вычисляет общую оценку на основе введенных пользователем значений.
- **Определение уровня удачи**: приложение назначает пользователям категорию «удачливый», «нейтральный» или «неудачливый» на основе их среднего балла.

- **Обновления в реальном времени**: отображаемый общий счет и уровень удачи мгновенно обновляются по мере того, как пользователи корректируют свои входные данные.

## Структура проекта

- **HTML**: проект состоит из одного HTML-файла, который включает приложение Vue.js и форму для ввода данных пользователем.
- **CSS**: стилизация применяется с использованием внешнего CSS-файла, который определяет внешний вид страницы, включая цветовое кодирование для различных уровней удачи.
- **JavaScript**: логика приложения написана на Vue.js и обрабатывает вводимые данные от пользователей, вычисляет общий счет и динамически отображает результаты.

## Установка

1. Клонируйте репозиторий:

```
git clone https://github.com/your-username/expecting-positive-events.git
```

2. Перейдите в каталог проекта:

```
cd expecting-positive-events
```

3. Не требуются инструменты сборки или дополнительные пакеты, так как это простой проект Vue.js, который запускается прямо в браузере.

## Использование

1. Откройте файл `index.html` в своем веб-браузере.
2. Отрегулируйте ползунок для каждого утверждения, чтобы отразить ваши ожидания позитивных событий.
3. Наблюдайте за общим счетом и вычисленным уровнем удачи в режиме реального времени, взаимодействуя с ползунками.

## Примеры утверждений

Приложение предоставляет набор утверждений, таких как:

1. Рано или поздно вы услышите от кого-то, что вы талантливы.
2. Вы выглядите моложе своих лет.
3. Вы отлично проведете время в свой следующий отпуск.

Каждое утверждение имеет ползунок, где пользователи могут выбрать значение от 0 до 100, представляющее степень их согласия с утверждением.

## Уровни удачи

На основе среднего значения ваших оценок приложение отнесет вас к одной из трех категорий:

- **Счастливчик**: оценка выше 80, окрашена в зеленый цвет.
- **Нейтральный**: оценка от 46 до 80, окрашена в серый цвет.
- **Несчастливчик**: оценка ниже 45, окрашена в красный цвет.

## Настройка

Вы можете изменить утверждения или любую другую логику, отредактировав файл `app.js`. Массив `text` содержит все утверждения, и вы можете добавлять или удалять элементы из этого списка, чтобы настроить оценку.

## Используемые технологии

- **Vue.js**: для создания реактивного пользовательского интерфейса.
- **HTML/CSS**: для структурирования и стилизации веб-страницы.

## Лицензия

Этот проект лицензирован по лицензии MIT — подробности см. в файле [LICENSE](LICENSE).
