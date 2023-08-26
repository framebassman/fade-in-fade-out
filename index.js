// сначала определим переменные
const seasonButtons = document.querySelectorAll(".season-label > input");
const tabs = document.querySelectorAll(".book-container-wraper > div");
let prefActiveSeasonButtonIndex = 0;

// тут напишем вспомогательные функции
const findNextActiveSeasonButtonIndex = () => {
  const arrayOfSeasonButtons = Array.from(seasonButtons);
  const nextActiveSeasonButtonIndex = arrayOfSeasonButtons.findIndex((item) =>
    item.checked === true
  );
  return nextActiveSeasonButtonIndex;
}

const makeTabHidden = (event, prevTab) => {
    prevTab.classList.remove("visible-tab");
    prevTab.classList.add("hidden-tab");
  }
  
const makeTabVisible = (event, nextTab) => {
    nextTab.classList.remove("hidden-tab");
    nextTab.classList.add("visible-tab");
}

// теперь пишем большую функцию
const changeTab = (event) => {
    // prefIndex мы вычислили в начале
    // сейчас вычисляем nextIndex
    const nextActiveSeasonButtonIndex = findNextActiveSeasonButtonIndex();

    // теперь определяем с какими табами надо работать
    const prevTab = tabs[prefActiveSeasonButtonIndex];
    const nextTab = tabs[nextActiveSeasonButtonIndex];

    // теперь переключаем табы
    makeTabHidden(event, prevTab);
    // оборачиваем вторую часть переключения в setTimeout чтобы она сработала с задержкой
    setTimeout(
        () => {
            makeTabVisible(event, nextTab);

            // тут запоминаем на следующий шаг, какая из таб сейчас активна
            prefActiveSeasonButtonIndex = nextActiveSeasonButtonIndex;
        },
        2000
    );
}

seasonButtons.forEach ((item) => (
    item.addEventListener("click", changeTab)
))