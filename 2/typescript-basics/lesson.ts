function translateFrenchToEnglish(french: string) {
	return french.replace("le", "the").replace(/oui/g, "yes").replace("ohohoho", "hahaha")
}
const frenchBooks = ["le cool guy", "oui oui", "ohohoho"]

const englishBooks: string[] = []

for(let frenchBook of frenchBooks) {
  const englishBook = translateFrenchToEnglish(frenchBook)

  englishBooks.push(englishBook)
}

console.log(frenchBooks)
console.log(englishBooks)


