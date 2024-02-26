// 5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
// Məsələn: "hell5o wor6ld" -> 56
// getNumberFromString(number)



const getNumberFromString = (s) => {
    let numbers = '';
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            numbers += s[i];
        }
    }
    return numbers;
}


let result = getNumberFromString("hell5o wor6ld");
document.write(result);