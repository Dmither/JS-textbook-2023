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
Оператор `||` повертає перше правдиве значення (result = val1 || val2)

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
Ключ приводиться в строковий тип.
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

Для створення об'єктів простих об'єктів за шаблоном використовуються **ф-ї-конструктори**.  
Ім'я констуктора з великої літери, новий об'єкт - виклик з `new`.  
Створює пустий об'єкт `this`, через який заповнюються поля та повертає його.  
Методи в конструкторі: `this.method = function(){}`.

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

Є 3 види лапок: одинарні, подвійні та обернені (для додаткового ф-лу).  
Рядки кодуються в UTF-16. Спецсимволи екрануються `\`, `\u..` додає символ юнікоду.  
`s.length` - повертає довжину (\n - 1 символ). `s[n]` - повертає n-й символ.  
`s.toUpperCase()`, `s.toLowerCase()` - повертають рязок зі зміненим регістром.  
`s.indexOf(sub, pos=0)`, `s.lastIndexOf(sub, pos=-1)` - індекс першого входження.  
`s.includes(sub, pos=0)`, `s.startsWith()`, `s.endsWith()` - наявність входження.  
`s.slice(fst, end=-1)` - повертає підрядок з fst по end-1, підтримує від'ємні індекси.  
`s.substring(fst, snd)` - підрядок з fst по snd-1, або з snd по fst-1.  
`s.substr(fst, len=all)` - підрядок з fst довжиною len.  
Порівняння рядків проводиться посимвольно за номерами юнікоду: "a" > "Z", "Ö" > "Z".  
`s.codePointAt(pos)` - код за позицією, `String.fromCodePoint(code)` - символ за кодом.  
`s1.toLocaleCompare(s2)` - порівняння відповідно правил мови (< = >) (-1 0 1).  
`s.trim()` - повертає рядок без пробілів напочатку та вкінці.  
`s.repeat(n)` - повертає рядок помножує, помножений на n.

Оголошення масиву: `[]`, `[args]`, `new Array()`, `new Array(args)`.  
Елементами масиву можуть бути будь-які елементи.  
`arr[i]` - повертає або змінює елемент з індексом.  
`arr.at(i)` - повертає елемент з індексом, підтримує від'ємні.  
`arr.push(els)`, `arr.unshift(els)` - додає в кінець (на початок) елементи.  
`arr.pop()`, `arr.shift()` - видаляє і повертає останній (перший) елемент.  
Перебираються циклами `for` та `for..of`. Не використавувати for..in.  
Зміна `arr.length` дає можливість вкоротити масив.  
`arr.toString` - єдина ф-я перетворення, повертає рядок елементів, розділених `,`.  
Порівняння через цикли.

`arr.splice(pos=0, delCnt=0, elems=[])`_ заміняє в позиції pos delCnt елементів на elems.  
`arr.slice(fst=0, end=all)` повертає підмасив з fst по all.  
`arr.concat(args)` повертає масив елементів arr та аргументів (елементів аргумента).  
`arr.forEach( func() )` викликає ф-ю для кожного елементу.  
`arr.indexOf(item, from=0)`, `arr.lastIndexOf(i, f)` повертають індекс елемента.  
`arr.includes(item, from=0)` перевіряє наявність елементу.  
`arr.find(func())`, `arr.findIndex(func())` повертає поточний елемент (індекс) при true.  
`arr.filter(func())` повертає масив елементів, для яких true.  
`arr.map(func())` викликає ф-ю для кожного елемента та повертає масив результатів.  
`arr.sort(sortFunc)`_ сортує масив відповідно ф-ї (< = >) (-1 0 1).  
`arr.reverse()`\* повертає зворотний масив.  
`s.split(del="")` розділяє рядок. `arr.join(del="", len=all)` поєднує в рядок.  
`arr.reduce(func(accumulator,item,index=,array=){}, start)`, `arr.reduceRight()`  
виконують ф-ю для кожного елемента, результат переноситься на наступну ітерацію.  
`Array.isArray()` перевіряє чи масив.  
**Тут func() - ф-я-колбек, будь-який вид ф-ї з аргументами (item, index=, array=).**  
Методи sort, reverse та splice змінюють поточний масив.

Цикл `for..of` можуть використовувати лише **ітеративні об'єкти**.  
Для цього об'єкт має реалізовувати метод `[Symbol.iterator]()`, який повертає ітератор.  
Ітератор має метод `next()`, повертає {done: false, value: current} або {done: true}.  
**Псевдомасиви** - об'єкти, мають індекси та lenght, але не ітератор та методи масива.  
`Array.from(src, func=, this=)` створює масив з ітерованого об'єкта або псевдомасива,  
func= дає можливість виконати ф-ю для кожного елемента, this= вказує для неї об'єкт.

`Map` - колекція \[ключ/значення], ключі будь-якого типу без преведення.  
Створити колекцію: `new Map(iterable=)`, арг. об'єкт-ітератор пар \[ключ, знач].  
Робота: `.set(key, val)`, `.get(key)`, `.has(key)`, `.delete(key)`, `.clear()`, `.size`.  
Перебір: for..of `.keys()`, `.values()`, `.entries()` або `.forEach(func())`,  
тут func() - ф-я-колбек, будь-який вид ф-ї з аргументами (item, index=, map=).  
Перетворити об'єкт в колекцію: `new Map(Object.entries(obj));`.  
Перетворити колекцію в об'єкт: `Object.fromEntries(map.entries());`.  
`Set` - множина унікальних значень без ключів.  
Створити множину: `new Set(iterable=)`, арг. об'єкт-ітератор, копіює значення.  
Робота: `.add(val)`, `.has(val)`, `.delete(val)`, `.clear()`, `.size`.  
Перебір: for..of `.keys()`, `.values()`, `.entries()` або `.forEach(func())`  
тут keys() повертає значення, entries() повертає пару значення/значення,  
func() - ф-я-колбек, будь-який вид ф-ї з аргументами (item, index=, map=).

`WeakMap` та `WeakSet` - аналоги Map та Set, які приймають об'єкти (не примітиви)  
в якості ключів (елементів), не перешкоджають збиранню сміття.  
Використовуються як додаткові сховища, для зберігання додаткових даних та кешу.  
Не підтримують ітерацію, keys(), values(), entries(), size, clear.

Масив з об'єкта: `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`.  
Повертають реальний масив замість ітерабельного об'єкта.  
Для застосування методів інших структур: Object.entries, операція, Object.fromEntries.

Деструктурування дозволяє зіставити масив або об'єкт з кількома змінними.  
`let [item1 = default, , item3, ...rest] = array` для масиву.  
При відсутності значення в змінну default або undefined. Залишок в ...rest.  
Опрацьовує будь-які структури, які перебираються. Default будь-що (н-д ф-ю).  
`let {prop: varName = default, prop2, ...rest} = object` для об'єкту.  
Змінні мають повторювати назви властивостей об'єкту.
Відповідне prop або default запишеться в varName. Інші властивості в ...rest.  
Для роботи з вкладеними об'єктами/масивами необхідно повторити структуру цілі.

Об'єкт `Date` зберігає дату і час в мілісекундах після 1 січня 1970 UTC+0.  
Створити `new Date()` - поточний час; `(ms)` - мілісекунди (timestamp).  
`(datestring)` - приймає і автоматично аналізує рядок.  
`(year, month, date=1, hours=0, minutes=0, seconds=0, ms=0)` - в місцевому часі.  
`getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`,  
`getSeconds()`, `getMilliseconds()`, `getDay()` повертають відповідний параметр.  
`getUTCFullYear()` та інші повертають відносно UTC+0.  
`getTime()` - повертає timestamp (з 1 січня 1970 UTC+0).  
`getTimezoneOffset()` - повертає різницю між UTC та місцевим часом у хвилинах.  
`setFullYear(year, month=, date=)`, `setMonth(month, date=)`, `setDate(date)`,  
`setHours(hour, min=, sec=, ms=)`, `setMinutes(min, sec=, ms=)`, `setSeconds(sec, ms=)`,  
`setMilliseconds(ms)` та їх UTC-аналоги встановлюють відповідні параметр(и).  
`setTime(timestamp)` встановлюють повну дату і час.  
Автокорекція дати виправляє при виході за діапазон (32.01 => 1.02).  
Перетворення дати в число (timestamp) дозволяє порівнювати дати.  
`Date.now()` - повертає поточний timestamp без створення об'єкта.  
`Date.parse(str)` читає дату із рядка виду `YYYY-MM-DDTHH:mm:ss.sssZ`,  
`YYYY-MM-DD`, `YYYY-MM`, `YYYY`. Неправильна строка - NaN.
T - роздільник, Z - зона виду +-hh:mm. ('2012-01-26T13:51:50.417+02:00').

`JSON` - формат із власним незалежним стандортом та бібліотеками більшості мов.  
Підтримує прості об'єкти, масиви, рядки, числа, були та null.  
Лапки змінюються на подвійні, назви властивостей беруться в лапки.  
Ф-ні властивості, символьні ключі та значення, властивості з undefined пропускаються.  
`JSON.stringify(val, replr=, spc=)` повертає JSON-кодований (серіалізований) об'єкт.  
`replr` масив власт-й для кодування або ф-я відобр-я. `spc` к-ть пробілів форматування.  
Неможливий з циключними посиланнями. Викликає стандартну/перевизначену ф-ю `toJSON()`.  
`JSON.parse(str, reviever=function(key, Value))` декодує JSON-рядок.  
`reviever` необов'язкова ф-я, для кожного (key, value) та може перетворити значення.

### Розширена робота з функціями {#1-6}

**Рекурсивна ф-я** викликає спрощену версію себе.  
**Рекурсивно визнечена структура** даних може використовувати сама себе.  
(н-д зв'язний список посилається на список або null).  
Дерева (розгалудження) є рекурсивними.  
Будь-яка рекурсивна ф-я може бути переписана в ітераційну (оптимізовану).  
Для кожного виклику ф-ї створюється власний контекст виконання, тому цикли часто швидше.

**Залишкові параметри** `...` дозволяють передати довільну к-ть аргументів як масив  
`function func(a, b, ...rest){}`. Мають бути в кінці, звертаємся за ім'ям (rest).  
`arguments` - ітерабельний псевдомасив всіх аргументів будь-якох ф-ї, крім стрілкових.  
**Синтаксис розширення** `...` розпаковує _ітеративний об'єкт_ до списку аргументів  
`func(a, b, ...arr);` передасть список аргументів взятих зі значень arr.  
Об'єднання масивів: `let arr = [11, ...arr1, b, ...arr2]`.  
Копія масива: `let arr = [...arr2]`; копія об'єкта: `let obj = {...obj2}`.

Змінна, оголошення в блоці коду видима тільки в ньому. Аргументи ф-ї та for в блоці коду.  
Кожен блок, ф-я та скрипт вцілому мають власний асоціативний об-т **Лексичне середовище**,  
яке складається з _запису середовища_ (зберігає локальні змінні як властивості та ін) та  
посилання на _зовнішнє лексичне середовище_ (або null).  
На старті виконання змінні - неініціалізовані недоступні властивості ЛС;  
функції при Function Declaration ініціалізується миттєво та повністю.  
Доступ до змінної починається із внутрішнього ЛС та підіймається до глобального.  
Якщо змінна не знайдена в строгому режимі помилка, інакше нова глобальна змінна.  
Якщо викликана до ініціалізації - завжди помилка.  
**Замикання** - це ф-я, що запам’ятовує свої зовнішні змінні, може отримати до них доступ.  
Кожна ф-я JS запам'ятовує ЛС, де створена, та має доступ до нього (всі є замиканнями).  
Кожен виклик створює нове ЛС, на яке посилаються викликані всередині ф-ї.  
Якщо ф-я повертає іншу, кожен раз створюється нове ЛС, до якого повернена ф-я має доступ.  
ЛС видаляється лише при відсутності на нього посилань (зовнішніх та внутрішніх).

Застарілі змінні `var` не мають блочної області видимості (лише глобальну або  
функціональну). Оголошення `var` запускаються при запуску скрипта або функції.

Глобальний об'єкт містить змінні, які мають бути доступні всюди. Має спеціальну назву:  
`window` (браузери), `global` (Node.js); або уніваерсальну `globalThis`.  
Доступ до глобальних змінних: `globalThis.field`. Можна використовувати в поліфілах.

Функції, як об'єкти, можуть мати властивості. Стандартні name та length.  
`f.name` - повертає рядок назви ф-ї (явне або контекстне ім'я).  
`f.length` - кількість параметрів ф-ї (крім ...rest).  
Можна використовувати для інтроспекції при роботі ф-ї з іншими ф-ями.  
До ф-ї можна додати власні кастомні властивості.  
Named Function Expression дозволяє додати до функціонального виразу внутрішню назву  
(для посилання на саму себе, недоступна ззовні).

Синтаксис об'яви ф-ї `new Function(args=, body)` дозволяє **створити ф-ю з рядка**.  
(н-д для динамічного створення ф-ї на основі рядка, переданого сервером)  
Аргументи можуть передаватись як окремі рядки, або одним рядком через кому.  
Поле середовища посилаєтсья не на зовнішне ЛС, а на глобальне.

`setTimeout(func, delay=, ...args)`, `setInterval()` встановлюють затримку виклику.  
func - ф-я (без дужок), delay - затримка (виклик через delay після основного скрипта),  
...args - аргументи, передаються в відповідну ф-ю. **Повертає ID таймера (number)**
setTimeout - разово, setInterval - циклічно кожні delay мілісекунд.  
Вкладений setTimeout дозволяє точно встановити затримку між попередньою і наступною.  
`clearTimeout(timerID)`, `clearInterval(timerID)` припиняють роботу таймерів.

Декоратори - ф-ї-обгортки, додають ф-нал не змінюючи поведінку осн. ф-ї. Багаторазові.  
При використанні декоратора ф-я втрачає контекст виклику (старе посилання this).  
Якщо осн. ф-я потребує this, доцільно передати об'єкт виклику (об'єкт перед крапкою):  
`func.call(this, ...args)` приймає спочатку контекст виклику, потім перелік аргументів.  
`func.apply(this, args)` приймає спочатку контекст виклику, потім псевдомасив агрументів.  
Переадресація виклику - передача всіх аргументів разом з контекстом до іншої ф-ї.

При передачі ф-й в інші втрачається контекст об'єкта, який передається в this.  
`func.bind(this, ...args)` повертає ф-ю з явно вказаним this та вказані аргументи.  
Часткова ф-я дозволяє автоматично вказати певні параметри існуючої ф-ї:  
ф-я повертає ф-ю з необхідною к-тю параметрів, що викликає існуючу зі вказаними явно.

**Стрілкові** ф-ї не мають **контексту**, `this`, `arguments`, не викликаються з `new`.

### Властивості об'єкта, їх конфігурації {#1-7}

Влас-ть даних має значення `value` та прапори: `writable` - можливість змінити значення,  
`enumerable` - видимий в циклах, `configurable` - може змінювати прапори та видаляти.  
За умовчуванням всі прапори в true.  
При configurable=false можна змінити лише writable=false.  
`Object.getOwnPropertyDescriptor(obj, prop)` повертає об'єкт опису властивості.  
`Object.getOwnPropertyDescriptors(obj)` повертає об'єкт дескрипторів всіх властивостей.  
`Object.defineProperty(obj, prop, descriptor)` записує властивість з параметрами.  
`Object.defineProperties(obj, descriptor)` записує властивості з параметрами.  
Вказаний параметр в об'єкті desctiptor буде змінений у властивості. Повертає об'єкт.  
Прапорне копіювання `Object.defineProperties({}, Object.getOwnPropertyDescriptors(...))`  
При відсутності властивості вона буде створена з прапорами в **false**.
`Object.preventExtensions(obj)` забороняє додавання нових властивостей.
`Object.seal(obj)` забороняє додавання/видалення власт-й, configurable=false для всіх.  
`Object.freeze(obj)` забороняє додавання/видалення/зміну, configurable=false,  
writable=false для всії властивостей.  
`Object.isExtensible(obj)` `Object.isSealed(obj)` `Object.isFrozen(obj)` тести для них.

Власт-ть аксесорів мають методи `get`, `set` та прапори `enumerable`, `configurable`.  
`get prop(){}` виконує код при отриманні prop, `set prop(){}` - при встановленні prop.  
При відсутності відповідного get або set виникає помилка.  
В якості дескриптора приймається об'єкт з методами get(){} та set(val){}.  
При використанні в якості обгортки реальної властивості вказувати її як `_propName`.

### Прототипи, наслідування {#1-8}

**Прототип** - шаблон для проєктування об'єктів.  
Усі об'єкти мають приховану властивість успадкування `[[Prototype]]` (об'єкт або null).  
`obj.__proto__` дає доступ (гет/сет) до цієї властивості.  
Запис/видалення властивостей даних здійснюються безпосередньо на об'єкті.  
Методи при відсутності в об'єкті викликаються з прототипа.  
Методи отримання **keys/values** ігнорують успадковані вл-ті. Цикл `for..in` ітерує всі.  
`obj.hasOwnProperty(prop)` перевіряє чи є власна властивість prop.

**Конструктор** - ф-я для створення об'єктів.  
При створенні нового об'єкта спочатку створюється з прототипа, потім поля конструктора.  
`F.prototype` встановлює властивість `[[Prototype]]` при виклику через `new F()`.  
При зміні `F.prototype`, `[[Prototype]]` попередньо створених об-в не змінюється.  
Типово F.prototype = { constructor: F }. Так буде f.constructor = F.  
`new obj.constructor()` створення об-та на основі конструктора вже існуючого об-та.
При заміні F.prototype важливо вказати constructor: F власноруч.  
В F.prototype зручно зберігати методи, які не мають створюватись для кожного екземпляра.  
Иожна замінити на this.\_\_proto\_\_ в конструкторі?

При створенні об-та (через new або {}) викликається конструктор `Object`;  
`[[Prototype]]` такого об-та буде `Object.prototype`, який зберігає методи об'єктів.  
Інші вбудовані об'єкти мають свої прототипи з методами та базуються на прототипі об-тів.  
Для примітивів створюються тимчасові об-ти-обгортки, які зберігають методи в прототипах.  
Зміна вбудованих прототипів допустима лише додаванням поліфілів при відсутності ф-й.  
Методи можна запозичити з інших прототипів для уникнення непотрібного успадкування:  
obj.join = Array.prototype.join бере метод масиву при успадкуванні від іншого об'єкта.

`Object.create(proto, descriptors=)` створює простий об'єкт з proto в якості прототипу.  
`Object.getPrototypeOf(obj)` повертає прототип об'єкта (як гетер).  
`Object.setPrototypeOf(obj, proto)` встановлює proto як прототип для об'єкта.  
`Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))`  
дозволяє зробити точну копію об'єкта.  
`Object.create(null)` створить простий об'єкт (чистий словник) без прототипа та методів.

### Класи {#1-9}

**Клас** - конструкція для створення об'єктів (альтернатива ф-м-конструкторам).  
`class ClassName {}` вміщає властивості `prop=value`, статичні поля об'єкта (new syntax),  
конструктор `constructor(args) {this.value = args[0]}`, динамічні або статичні поля,  
методи `doSmth(args) {}` передають методи в прототип об'єкта,  
гетери та сетери `get smth() {}`, `set smth(val) {}`, передає в прототип об'єкта,  
матоди з обчисленим ім'ям `["some" + "thing"]() {}`, передає в прототип об'єкта.

**Розширення класу** (наслідування) `class Child extends Parent {}`.  
Успадковує методи через прототипування (Child.prototype.\_\_proto\_\_ = Parent.prototype).  
**Перевизначення конструктора** вимагає спочатку викликати батьківський кон-р `super()`  
для створення this, після нього заповнює власні поля. (виклик до власних this-конструкцій)  
**Перевизначення методу** замінає батьківський. Виклик батьківського `super.doSmth()`.

**Статичні методи та поля** використовуються для функціональності класу а не екземпляра.  
`static doSmth() {}` доступний як MyClass.doSmth(), `static field` як MyClass.field.  
Заміняє зовнішні присвоєння MyClass.doSmth = function() {}, MyClass.fiels = value.  
Статичні методи та поля успадковуються: Child.prototype = Parent.

**Інкапсуляція** відділяє простий зовнішній інтерфейс від внутрішньої реалізації.  
**Захищені властивості** `_field` не мають конкретної підтримки мовою.  
Формально доступні всюди, практична домовленість використовувати лише всередині.  
**Приватні поля** `#field` підтримуються новим синтаксисом (може знадобитимь поліфіл).  
Недоступні ззовні та при наслідуванні.  
Обидва рішення - внутрішні структури, доступ до яких через методи або аксесори.  
`#field=value` `get field() {return this.#field}` `setField(value) {this.#field=value}`

При розширенні вбудованих класів, їх вбудовані методи повертають об'єкти розширеного типу.  
Для цього використовується властивість об'єкта constructor.  
Вбудовані типи не мають статичного успадкування від Object. Array.prototype != Object.

`cat instanceOf Cat` перевіряє чи є Cat.prototype в ланцюгу наслідування cat.  
`Object.prototype.toString.call(obj)` `{}.toString.call(obj)` назва вбудованого типу.

JS не підтримує багаторазове наслідування. Міксини можуть частково вирішити це.  
**Міксин** - клас (об'єкт), що містить методи для інших класів.  
`let myMixin = {method1(){}, method2(){}}` `Object.assign(MyClass.prototype, myMixin)`  
розширяє прототип класу потрібними методами без наслідування.

### Обробка помилок {1-10}

`try {}` `catch(err) {}` (catch {}) `finally {}` дозволяють обробляти помилки.  
err - об'єкт помилки, має властивості name, message та інші (н-д stack).  
Обов'язковим є тільки try; finally виконується в будь-якому випадку.  
`throw new MyError(message)` дає можливість генерувати власну помилку.  
Можна передавати будь-які об'єкти, бажано наслідувані від класу Error.  
Більшість середовищ дозволяють встановити глобальний обробник (як window.onerror)

Власні класи помилок бажано наслідувати від інших вбудованих класів помилок.  
Кастомний клас має викликати `super()` та перезаписати поле `name`.  
Перевірка відповідності класу `err instanceof MyError` або `err.name = MyError`.

### Проміси, async/await {1-11}

**Асинхронні дії** починаються зараз, закінчуються пізніше (н-д лоад скриптів чи модулів).  
При зверненні до недовантажених, недоопрацьованих даних виникає помилка.  
Для обробки ф-й з асинхронних джерел викликаєм через **колбек** після обробки:

```js
function loadScript(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error(`Error load ${src}`));
	document.head.append(script);
}
loadScript("./path/script.js", function (error, script) {
	if (error) {
	} else {
		scriptMethod();
	}
});
// scriptMethod() Error: does not exist
```

**Promise** - об'єкт, який зв'язує код-виробник і код-споживач.  
**Виконавець** `function(resolve, reject){}` - ф-я, передана в проміс.  
Виконується автоматично при створенні проміса. Вкінці запускає **один** з колбеків.  
Аргументи - стандартні колбеки (допускає довільну назву):  
`resolve(value)` викликається при успішному виконанні з результатом value;  
`reject(error)` якщо виникла помилка, error - об'єкт помилки.  
Внутрішні властивості проміса змінюються (очікування / успішно / помилка):  
`state` (pending/fulfilled/rejected), `result` (undefined/value/error).  
Для обробки результату використовуються **ф-ї-споживачі** (в довільній кількості):  
`.then(result=>{})`, `.then(result=>{}, error=>{})` при успішному/помилковому результаті;  
`.catch(function)`, `.catch(error=>{})` при помилковому (замість .then(null, error=>{}));  
`.finally(()=>{})` при будь-якому результаті, не приймає аргументів, як доопрацювання.

```js
function loadScript(src) {
	return new Promise(function (resolve, reject) {
		let script = document.createElement("script");
		script.src = src;
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Error on load ${src}`));
		document.head.append(script);
	});
}
let promise = loadScript("./outer.js");
promise.then(
	script => console.log(`${script.src} is loaded`),
	error => console.log(`Error: ${error}`)
);
```

Виклик `.then` **повертає проміс**, що дозволяє будувати ланцюги послідовних викликів.  
`.then(result => result * 2)` поверне новий проміс з результатом на основі попереднього  
(перший: {state: "fulfilled", value: 1}, наступний: {state: "fulfilled", value: 2}).  
`.then(result => new Promise())` створює новий проміс на основі після попереднього.  
Дозволяє створити ланцюги асинхронних дій, кожна з яких чекає виконання попередньої.

```js
loadScript("./outer.js") // load first script, if success
	.then(script => loadScript("./outer2.js")) // load second script, if success
	.then(script => {
		// other operations just after previous step
		one();
		two();
	});
```

Звичайна помилка в промісах тотожна завершенню викликом `throw err` == `reject(err)`.  
Будь-яка помилка буде спускатись ланцюгом до ф-ї, здатної її обробити (н-д .catch()).  
Для необроблених помилок викор-ся обробник подій (в браузері: unhandledrejection).

`Promise.all(iterable)` запускає паралельно кілька промісів, взятих з ітеративного об-та.  
Чекає виконання всіх, повертає проміс, value: масив результатів в порядку ітер. об-та.  
При виникненні помилки хоча б в одному, повертає цю помилку, інші результати ігнорує.  
Приймає проміси або звичайні значення, які займуть своє місце в місиві результатів.  
`Promise.allSettled(iterable)` запускає паралельно кілька промісів, повертає масив об-в.  
Повертає статус і результат для кожного проміса, навіть якщо це помилки.  
`Promise.race(iterable)` запускає кілька, повертає результат першого виконаного (гонка).  
`Promise.any(iterable)` запускає кілька, повертає результат першого успішно вииконаного.  
Якщо всі завершились помилкою - об-т AggregateError, .errors якого зберігає масив помилок.  
`Promise.resolve(value)` == `new Promise(resolve => resolve(value))`, застарілий.  
`Promise.reject(error)` == `new Promise((resolve, reject) => reject(error))`, застарілий.

Ф-ю з колбеком можна промісифікувати, викликавши її в промісі всередині нової ф-ї:  
`function pF(...args) {return new Promise((res, rej) => {cF(...args, callback)})}`

Обробка промісів завжди асинхронна, обробники викликаютсья після виконання поточного коду.  
Для гарантованого виконання після обробників фрагменти коду додаються в ланцюжок.

`async function f() {}` створює асинхронну ф-ю, яка завжди повертає проміс.  
Якщо результат асинхронної ф-ї не проміс, повертає успішний проміс з кінцевим значенням.  
`await myPromise` чекає виконання промісу та повертає виняток або результат.  

```js
async function func() {
	let promise = new Promise((res, rej) => res("done"));
	console.log(await promise)
}
```