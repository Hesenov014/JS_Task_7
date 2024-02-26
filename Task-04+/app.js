// 4.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber()
// funksiyasını yazın.Telefon nömrəsi 11 rəqəmdən ibarət olduqda və + 7 ilə başladıqda, funksiya true qaytarır.

function isValidNumber(phoneNumber) {
   
    if (phoneNumber.length === 11) {
   
        if (phoneNumber.startsWith("+7")) {
            return true;
        }
    }
    return false;
}


console.log(isValidNumber("+701235456789")); 