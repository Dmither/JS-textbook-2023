# JS-textbook-2023

Нотатки електронного підручника, розміщеного за адресою: https://uk.javascript.info/

Складається з двох частин:

1. [Мова програмування JavaScript](#1)
2. [Браузер: документ, події, інтерфейси](#2)

## Мова програмування JavaScript {#1}

Тут ви можете вивчити JavaScript, починаючи з нуля і закінчуючи просунутими концепціями, як ООП.

Ми зосередимось на самій мові, зрідка роблячи примітки щодо середовищ її виконання.

### Вступ {#1-1}

Мова JavaScript була створена для браузера, зараз її використовують в інших середовищах. JavaScript найбільш поширена для браузера, повністю інтегрована з HTML/CSS. Багато мов “транспілюються” в JavaScript і надають певні функції.

Довідники:  
[Специфікація ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)  
[MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)  
[Таблиця сумісності Caniuse](caniuse.com)

Для роботи використовуються легкі редактори коду або повноцінні середовища розробки.

Для зневадження використовують інструменти розробника браузера.  
Відкриваються зазвичай за допомогою `F12`.

### Основи JavaScript {#1-2}

Запуск із Node.js: `node index.js`.  
Запуск браузером: `<script>` код всередині тега.  
Запуск браузером зі стороннього файлу: `<script src="">`.

Програма складається з інструкцій, бажано розділяти `;`.  
Коментарі ігноруються та видаляються обробниками `//`, `/* */`.

Суворий режим додає сучасні функції. Напочатку вказати `"use strict"`.

Оголошення змінних: `let`, `const`, `var` та `variableName`.  
Для констант, значення яких відомо до виконання: `COLOR_ORANGE`

Number: `123`, `1.23`, `Infinity`, `-Infinity`, `NaN`.  
BigInt: `-123456789123456789123456789123456789123456789123456798n`.  
String: `"Hello world!"`. Boolean: `true`, `false`.  
Null: `null`. Undefined: `undefined`.  
Оператор `typeof` повуртає назву типу. (typeof 0 // "number")

`alert` - сповіщення (ОК),  
`confirm` - питання (Так / Ні),  
`prompt` - читання (Введений текст).

Перетворення на рядок `String(val)`.  
Перетворення на число `Number(val)`: undefined => NaN; null "" => 0.  
Перетворення на бул `Boolean(val)`: 0 null undefined NaN "" => false.

Математичні оператори: `+`, `-`, `*`, `/`, `%`, `**`  
Конкатенація: `str1 + str2`  
Оператори присвоєння: `=`, `+=`, `++`

Оператори порівняння: `>`, `<`, `>=`, `<=`, `!=`, `==`, `!==`, `===`  
Нестроге порівняння різних типів приводить їх до числових.  
При порівнянні потенційних undefined та null бажано перевірити.

Умовний оператор: `if(bool)`, `else`; `bool ? true : false`

Логічні оператори: `&&`, `||`, `!`, `??` (об’єднання з null `a ?? b`  
=> `(a !== null && a!== undefined) ? a : b`)  
`switch(x) {case val1: break}` якщо x === val1

Оператори циклу: `while(b){}`,`do{}while(b)`, `for(v;b;m){}`,  
`continue`, `break`, `break labelName` (зупинить `labelName: for(){}`)

Функції: `function funcName(args[]){}`, `funcName(args[]);`  
(створюються до виконання алгоритму, може виконуватись будь-де)  
Функ. вираз: `let funcNm = function(){};`  
(створюються підчас виконання алгоритму, тільки після оголошення)  
Функ.-колбек (передається як аргумент та виконується у відповідь на роботу основної ф-ї): `function funcNm(func){}`, `funcNm(another());`  
Стрілкова функція: `let funcName = (args[]) => result;`

### Якість коду {#1-3}

Зупинка виконання коду: брейкпоїнти в браузері або команда debagger.  
Зневаджувач має вікна файлів, коду та керуваня.  
При зупинці виконання скрипта у вікні керування можна переглянути  
поточні стани виразів, точки зупинок, стек викликів, змінні тощо.  
В консолі можна проводити дії під час зневадження.

Правила написання коду (для поліпшення читабельності):  
Фігурні дужки: короткий рядок - без; блок - єгипетський стиль.  
Обмежена довжина рядка. Стандартні горизонтальні відступи (таб).  
Вертикальні відступи розділяють код на логічні блоки (<= 9 рядків).  
Використання `;`. Уникнення багатьох рівнів вкладеності.  
Посібники з коду: Airbnb JavaScript Style Guide, StandardJS тощо.  
Для автоматичної перевірки використовується ESLint.

Коментувати: загальну структуру, опис "високого рівня";  
використання функцій; важливі, неочевидні рішення.  
Не коментувати конкретну роботу коду.  
Існують інструменти для автоматичної генерації коментарів.

Для перевірки коректності написання ф-й використовуються специфікації.  
Специфікації описують документацію, тести та приклади роботи.
Автотести складаються за допомогою Mocha, Chai.

Деякий сучасний, передовий функціонал може не підтримуватись на рушіях.  
Транспілятори - інструменти для перекладу однієї мови в іншу, доють  
можливість використовувати передовий синтаксис, ще не доданий в рушій.  
Поліфіли - умовне оголошення функції при її відсутності в рушії.  
`if (!Math.trunc) {...}`

### Об'єкти: основи {#1-4}

Об'єкти - контейнерний тип даних, зберігає піри ключ-значення.  
Створюються за допомогою `new Object();` або літералу `{}`.  
Може приймати необов'язкові параметри вигляду `key: value`.  
У вигляді змінної передаються прості ключі: `name: "John`.  
Ключ може бути переданий строкою, числом, змінною (`[var]:val`).  
Доступ до властивості: `obj.key`, `obj["key"]`, `obj[var]`.  
`delete var` - видалити властивість;  
`"key" in obj` - перевірка наявності влістивості;  
`for (let key in obj) {}` - цикл перебору ключів контейнера.  
Сортування властивостей: спочатку цілочислові за зростанням, потім інші в прядку додавання.

Об’єкти присвоюються та копіюються за посиланням.  
При копіюванні або передачі аргументом змінної передається посилання.  
Копіювання об'єктів: цикл або `Object.assign(dest, srcs[])`  
(копіює елементи з кожного src в dest і повертає його).  
Глибоке копіювання (об'єктів в об'єктах): рекурсія або ф-ї бібліотек.

Збирання сміття здійснюється абсолютно автоматично.  
Об’єкти зберігаються в пам’яті, поки вони досяжні (з кореня).

Оголошення методу: присвоєння декларованої ф-ї або ф-го виразу,  
оголошення повного `func: funciton() {}` або скороченого `func() {}`.  
`this` відображає об'єкт виклику (obj при obj.func()), визначається під час виконання;  
при глобальному виклику: undefined зі strict, global-object без нього.  
Для ланцюгового виклику ф-й кожній потрібно додати `return this`.
Стрілкові ф-ї не мають свого `this`.

Для створення об'єктів простих об'єктів за шаблоном використовуються ф-ї-конструктори.  
Ім'я констуктора з великої літери, новий об'єкт - виклик з `new`.  
Створює пустий об'єкт `this`, через який заповнюються поля та повертає його.

`?.` - опціональний ланцюжок, перевіряє перереднє на `null`/`undefined`
`obj?.prop` повертає його при наявності `obj` та `undefined` при відсутності.  
`obj?.[prop]` повертає його при наявності `obj` та `undefined` при відсутності.  
`obj.method?.()` викликає його при наявності `method` або повертає `undefined`.

`Symbol` - примітивний тип даних для унікальних ідентифікаторів.  
Створюється за допомогою `Symbol()`. Необов'язковий аргумент - опис (ім'я).  
Локальні символи завжди унікальні, глобальні унікальні за іменем.  
`Symbol.for(name)` - створює (повертає) глобальний символ з іменем.  
`Sumbol.keyFor(mySymbol)` - повертає ім'я глобального символа за змінною.  
Символ приховується в `for..in` та сторонніх скриптах.  
Багато системних глобальних символів для зміни вбудованої поведінки.

Об'єктно-примітивне перетворення викликається вбудованими ф-ми та операторами.  
Для реалізації логіки перетворення описується фанкція в полях об'єкта:  
`[Symbol.toPrimitive]` або `valueOf` та `toString` (можна лише останню).  
Типи (підказки, hint) перетворення: `"string"` для операцій, які потребують рядка;  
`"number"` - потребують чисто; `"default"` - можуть приймати рядок або число.  
Алгоритм перетворення: якщо існує, викликати `obj[Symbol.toPrimitive](hint)`,  
інакше якщо hint="string" спробувати `obj.toString()` або `obj.valueOf()`,  
інакше (hint="number"/"default") спробувати `obj.valueOf()` або `obj.toString()`.

### Типи даних {#1-5}

Примітиви крім `null` і `undefined` мають різні методи.  
Методи примітивів працюють через тимчасові об'єкти-обгортки.

Способи відображення числа: `1000000`, `1_000_000`, `1e6`.  
Систаеми числення: 2 `0b11111111`, 8 `0o377`, 16 `0xff` (`0xFF`).  
`n.toString(base)` - поверне рядок в системі числення зі вказаною базою.  
`Math.floor(n)` - округляє вниз, `Math.ceil(n)` - округляє вгору,  
`Math.round(n)` - округляє до найближчого, `Math.trunc(n)` - зрізає десяткову частку.  
`n.toFixed(m)` - повертає рядок з числом, округленим до m дробових знаків.  
Операції над числами дають похибку, необхідно округляти до нормального значення.  
До числових відносяться `Infinity`, `-Infinity`, `NaN`. Існують `0` та `-0`.  
`isNaN(n)` - якщо NaN; `isFinite(n)` - якщо не `Infinity`, `-Infinity`, `NaN`.  
`parseInt(n)`, `parseFloat(n)` зчитують числові значення на початку рядка (1.2rem)  
(мають необов'язковий другий аргумент - база системи числення).  
Вбудований об'єкт `Math` містить бібліотеку математичних ф-й та констант.
