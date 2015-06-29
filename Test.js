/**
 * Created by Dean on 6/28/2015.
 */

var langGen = NAMEIFY.createLanguageGenerator();
var lang = langGen.generateLanguage();

for (var n = 0, nMax = 50; n < nMax; n++) {
	console.log(lang.generateName(5));
}