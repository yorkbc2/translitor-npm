var strings = {
	eng: ["a", "b", "v", "g", "d", "e", "e", "zh", "z", "i", "i",
		"y", "k", "l", "m", "n", "o", "p", "r" ,"s", "t", "u", "f", "h", "c", "sh", "sch", "ya", "yu", "'", "", 'ch', 'w', 'i'],
	rus: ["а", "б", "в", "г", "д", "е", "э", "ж", "з", "ы", "и", 
		"й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ш", "щ", "я", "ю", "ь", "ъ", 'ч', 'в', 'ай']
};

var regs = {
	forClearing: {

		fromSpaces: {
			fromReg: /[\ ]/g,
			toReg: "-"
		},

		fromPoints: /[\?.,!@#$%^&*():"'}{№;_-]/gi

	}
}

function each (targetArray, callBack) {

	var count = targetArray.length;

	for(var c = 0 ; c < count ; c++) {

		callBack(targetArray[c], c);

	}

};

function clearFromPoints (string) {
	return string.replace(regs.forClearing.fromPoints, function (s) {
		return '';
	});
}

function clearFromSpaces (string) {

	return string.replace(regs.forClearing.fromSpaces.fromReg,
						regs.forClearing.fromSpaces.toReg).replace(regs.forClearing.fromSpaces.fromReg, '');

}



var translitFromRussian = function (russianString, onlyLowerCase) {

	var onlyLower = onlyLowerCase || false;
	
	var targetString = new String(russianString);

	each(targetString, function (item, index) {

		each(strings.rus, function (char, charId) {

			if(onlyLowerCase == true) {
				if(char == item || char.toUpperCase() == item ||
					 char.toLowerCase() == item ) {

					targetString = targetString.replace(item, function () {
						return strings.eng[charId];
					})

				}
			}
			else {
					if(char.toUpperCase() === item) {
						targetString = targetString.replace(item, function () {
							if(strings.eng[charId].length > 1) {
								return strings.eng[charId].charAt(0).toUpperCase() + strings.eng[charId].slice(1);
							}
							else {
								return strings.eng[charId].toUpperCase();
							}
						})
					}
					else if (char.toLowerCase() === item) {
						targetString = targetString.replace(item, function () {
							return strings.eng[charId].toLowerCase();
						})
					}

				}

		})

	});

	return targetString;
}

var translitFromEnglish = function (englString) {

	var targetString = new String(englString);

	each(targetString, function (item, index) {

		each(strings.eng, function (char, charId) {

			if(char == item || char.toUpperCase() == item.toUpperCase()) {

				targetString = targetString.replace(item, function () {
					return strings.rus[charId];
				})

			}

		})

	});


	return targetString;


}

var translitForUrl = function (russianString) {

	var targetString = new String(russianString);
	targetString = translitFromRussian(targetString, true);

	targetString = clearFromPoints(targetString);

	targetString = clearFromSpaces(targetString);

	return targetString;

}

exports.translitForUrl = translitForUrl;
exports.translitFromRussian = translitFromRussian;
exports.translitFromEnglish = translitFromEnglish;