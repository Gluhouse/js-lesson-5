function app() {
  let firstName = askInfo("Имя");
  let lastName = askInfo("Фамилию");
  let middleName = askInfo("Отчество");
  let age = askInfo("Возраст", false);
  let gender = askGender("Вы мужчина?");
  let ageDays = calcAgeDays(age);
  let ageFive = calcAgeInFive(age);
  let pension = isOnPension(gender, age);
  print(
    firstName,
    lastName,
    middleName,
    age,
    gender,
    ageDays,
    ageFive,
    pension
  );
}

function askInfo(askWhat, isString = true) {
  let info = prompt("Введите " + askWhat);
  while (!validation(info, isString)) {
    info = prompt("Введите " + askWhat);
  }
  return info;
}

function validation(item, isString) {
  if (isString && item != "" && item != null && isNaN(item)) {
    return true;
  } else if (!isString && +item != "" && !isNaN(item)) {
    return true;
  } else return false;
}

function askGender(question) {
  let gender = confirm(question) ? "Мужчина" : "Женщина";
  return gender;
}

function calcAgeDays(age) {
  return +age * 365;
}

function calcAgeInFive(age) {
  return +age + 5;
}

function isOnPension(gender, age) {
  if (
    (gender === "Мужчина" && +age >= 65) ||
    (gender === "Женщина" && +age >= 55)
  ) {
    return "На пенсии";
  } else return "Не на пенсии";
}

function print(
  firstName,
  lastName,
  middleName,
  age,
  gender,
  ageDays,
  ageFive,
  pension
) {
  alert(`Ваше имя: ${firstName}
  Ваша фамилия: ${lastName}
  Ваше отчество: ${middleName}
  Ваш возраст: ${age}
  Ваш пол: ${gender}
  Возраст в днях: ${ageDays}
  Возраст через 5 лет: ${ageFive}
  На пенсии ли: ${pension}`);
}

app();
