Мини-проект Прозноз погоды.

С помощью fetch() делается асинхроный запрос на открытый API сайт с покозаниями по погоде.

 e.preventDefault() не дает перезапускать страницу целиком, а только элемент.
 
Полученый запрос преобразуем в JSON.

Объект "state" устанавливает нужынй параметрый поумолчанию "undefined".

Нужные параментры погоды забираются из JSON.

Условие if проверяет, были ли получены данные через fetch().

В компонент "Weather" передаем параметры для того чтобы они были доступны в этом компаненте.

В компоненте "Weather" props.city && условный оператор проверяет получены ли значения, если получены, то выводит теги на экран

В компоненте "Form" установлен слушатель, который реагирует на кноку.
