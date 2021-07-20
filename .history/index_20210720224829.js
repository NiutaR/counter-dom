document.getElementById('counter').style.textAlign = 'center';

//getting increment and decrement

/*let add = document.getElementById('increment');
let remove = document.getElementById('decrement');
let count = document.getElementById('startCounter');
let count2 = document.getElementById("num");
let number = 1;


add.onclick = function() {
    if (number <= 10) {
        number++;
        count.innerHTML = number;
        count2.value = number;
    }
};

remove.onclick = function() {
    if (number >= 9) {
        number--;
        count.innerHTML = number;
        count2.value = number;
    }
};*/

let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;
let price = 350;

buttonCountPlus.onclick = function() {
    if (number <= 3) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
    }
}:
Ответ написан более года назад
Нравится 1 6 комментариев
Пригласить эксперта
ВАШ ОТВЕТ НА ВОПРОС
Войдите, чтобы написать ответ
Войти через центр авторизации
ПОХОЖИЕ ВОПРОСЫ
javascript
JAVASCRIPT Простой
Как отключить некоторые функции расширения prettier?
1 подписчик  10 минут назад  4 просмотра
0
ответов
css
CSS+2 ЕЩЁ Простой
Как сделать тень необычной формы в css?
1 подписчик  43 минуты назад  26 просмотров
2
ответа
javascript
JAVASCRIPT+1 ЕЩЁ Средний
Как вынести массив javascript во внешний json и потом подключить?
1 подписчик  45 минут назад  23 просмотра
0
ответов
javascript
JAVASCRIPT+1 ЕЩЁ Простой
Почему не отправляет форму через чисты JS?
1 подписчик  50 минут назад  18 просмотров
0
ответов
css
CSS+1 ЕЩЁ Простой
Слайдер сьехал влево. Почему?
1 подписчик  час назад  14 просмотров
0
ответов
javascript
JAVASCRIPT Простой
Почему в данном коде this undefined?
1 подписчик  2 часа назад  62 просмотра
2
ответа
php
PHP+2 ЕЩЁ Средний
Реализация проекта поэтапной диагностики, как лучше?
1 подписчик  3 часа назад  27 просмотров
0
ответов
javascript
JAVASCRIPT+1 ЕЩЁ Простой
Как анимировать заливу svg снизу вверх?
2 подписчика  3 часа назад  28 просмотров
0
ответов
javascript
JAVASCRIPT Простой
Почему код не выводит отсортированный массив?
1 подписчик  4 часа назад  86 просмотров
1
ответ
javascript
JAVASCRIPT Простой
Как с помощью JS автоматически повернуть экран пользователя на мобильном устройстве?
2 подписчика  5 часов назад  109 просмотров
1
ответ
Показать ещё
ВАКАНСИИ С ХАБР КАРЬЕРЫ
JavaScript Developer
Disco
от 3 000 €
Javascript Developer
Cryptuoso
от 100 000 до 150 000 ₽
Javascript разработчик
Artezio • Москва
от 160 000 до 220 000 ₽
Ещё вакансии
ЗАКАЗЫ С ХАБР ФРИЛАНСА
Натянуть свёрстанные макеты на интернет магазин на битриксе
20 июл. 2021, в 22:30
15000 руб./за проект
Разработать парсер Likee.com
20 июл. 2021, в 22:17
2000 руб./за проект
Таргетинг
20 июл. 2021, в 22:03
1 руб./за проект
Ещё заказы
МИНУТОЧКУ ВНИМАНИЯ
Неделя Java-разработчиков на Хабр Карьере
Событие
Сколько нужно DS, чтобы распутать клубок big data?
Опрос
Как создать хранилище корпоративной почты
Промо
Присоединяйтесь к сообществу, что

