// 現在の日付を取得
let currentDate = new Date();

// 年、月、日
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; 
let currentDay = currentDate.getDate();

console.log("年:", currentYear);
console.log("月:", currentMonth);
console.log("日:", currentDay);