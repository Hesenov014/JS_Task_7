/*2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
Proqram N ədədini istifadəçidən soruşur.*/

const number = prompt('Zəhmət olmasa, bir ədəd daxil edin: ');

for (let i = 0; i < parseInt(number); i++) {
  console.log("I know how to use cycles");
}