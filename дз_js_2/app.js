// Завданння_1
let counter = 0;
let tmp = prompt("Скільки років незалежна Україна?");
console.log(tmp);
if (tmp === "31") {
    alert("Відповідь вірна.");
    ++counter;
} else {
    alert("Відповідь невірна.");
}
let tmp = prompt(" Хто був першим президентом України?");
console.log(tmp);
if (tmp === "Кравчук") {
    alert("Відповідь вірна.");
    ++counter;
} else {
    alert("Відповідь невірна.");
}
let tmp = prompt("В якому році була ухвалена Конституція України?");
console.log(tmp);
if (tmp === "1996") {
    alert("Відповідь вірна.");
    ++counter;
} else {
    alert("Відповідь невірна.");
}
let tmp = prompt("Назвіть ім'я та прізвище автора слів гімну України.");
console.log(tmp);
if (tmp === "Павло Чубинський") {
    alert("Відповідь вірна.");
    ++counter;
} else {
    alert("Відповідь невірна.");
}
let tmp = prompt("Назвіть прізвище теперішнього президента України.");
console.log(tmp);
if (tmp === "Зеленський") {
    alert("Відповідь вірна.");
    ++counter;
} else {
    alert("Відповідь невірна.");
}
alert("Кількість правильних відповідей:" + counter)

// Завдання_2
let months = promt("Ведіть номер місяця")
switch (months) {
    case "1":
        alert("Січень");
        break;
    case "2":
        alert("Лютий");
        break;
    case "3":
        alert("Березень");
        break;
    case "4":
        alert("Квітень");
        break;
    case "5":
        alert("Травень");
        break;
    case "6":
        alert("Червень");
        break;
    case "7":
        alert("Липень");
        break;
    case "8":
        alert("Серпень");
        break;
    case "9":
        alert("Вересень");
        break;
    case "10":
        alert("Жовтень");
        break;
    case "11":
        alert("Листопад");
        break;
    case "12":
        alert("Грудень");
        break;
    default:
        alert("Ви ввели не дійсний номер.")
        break;

}

