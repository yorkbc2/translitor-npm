# translitor-npm
Любишь транслит и строки "аре йоу думб?" (are you dumb?), тогда этот пакет для тебя!

Чтобы установить пакет себе в проект, нужно прописать следующее в терминале.

```sh

npm i --save translit-npm

```

Далее нужно подключить пакет с помощью require()

```js


var translit = require('transit-npm');


```

Пользуемся!

### .translitFromRussian(String russianString, Boolean onlyLowerCase)

Этот метод транслитит русский текст в английский, например:

```js


var translit = require('translit-npm');

var string = translit.translitFromRussian('Я хочу быть человеком!')

// Output: Ya hochu bit' chelovekom!


```

### .translitFromEnglish(String englishString)

Этот метод транслитит англ. текст в русский, например:

```js

var string = translit.translitFromEnglish('...');

```

### .translitForUrl(String russianString)

Этот метод не только транслитит русский текст в английский, а также делает из неё URL.

```js


var string = translit.translitForUrl('Я хочу быть человеком!')

// Output: ya-hochu-bit-chelovekom


```