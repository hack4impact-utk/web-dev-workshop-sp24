function translateFrenchToEnglish(french) {
    return french.replace("le", "the").replace(/oui/g, "yes").replace("ohohoho", "hahaha");
}
var frenchBooks = ["le cool guy", "oui oui", "ohohoho"];
var englishBooks = [];
for (var _i = 0, frenchBooks_1 = frenchBooks; _i < frenchBooks_1.length; _i++) {
    var frenchBook = frenchBooks_1[_i];
    var englishBook = translateFrenchToEnglish(frenchBook);
    englishBooks.push(englishBook);
}
console.log(frenchBooks);
console.log(englishBooks);
