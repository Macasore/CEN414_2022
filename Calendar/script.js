const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
// storing full name of all months in array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let mine = new Date(2023, 8,2);
let dad = new Date(2023, 1, 5);
let mom = new Date(2023, 5, 13);
let sib1 = new Date(2023, 0, 24);
let sib2 = new Date(2023, 2, 13);
let sib3 = new Date(2023, 3, 14);
let newYearEve = new Date(2022, 11, 31);
let newYear = new Date(2022, 0, 1);
let christmas = new Date(2022, 11, 25);
let christmasEve = new Date(2022, 11, 24);
let independence = new Date(2022, 9, 1);
let childrensDay = new Date(2022, 4, 27);
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(
            currYear,
            currMonth,
            lastDateofMonth
        ).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = '';
    for (let i = firstDayofMonth; i > 0; i--) {
        // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday =
            i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
                ? "active"
                : "";
        if (i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()){
            liTag += `<li class="active">${i}</li>`;
        }
        else if (i === mine.getDate() &&
            currMonth === mine.getMonth() 
            ){
            liTag += `<li class="myBirth">${i}</li>`;
        }
        else if (i === dad.getDate() &&
            currMonth === dad.getMonth()
            ){
            liTag += `<li class="dadBirth">${i}</li>`;
        }
        else if (i === mom.getDate() &&
            currMonth === mom.getMonth()
            ) {
            liTag += `<li class="momBirth">${i}</li>`;
        }
        else if (i === sib1.getDate() &&
            currMonth === sib1.getMonth()
            ) {
            liTag += `<li class="sib1Birth">${i}</li>`;
        }
        else if (i === sib2.getDate() &&
            currMonth === sib2.getMonth()
            ) {
            liTag += `<li class="sib2Birth">${i}</li>`;
        }
        else if (i === sib3.getDate() &&
            currMonth === sib3.getMonth() 
            ) {
            liTag += `<li class="sib3Birth">${i}</li>`;
        }
        else if (i === newYearEve.getDate() &&
            currMonth === newYearEve.getMonth() || 
            i === newYear.getDate() &&
            currMonth === newYear.getMonth() ||
            i === childrensDay.getDate() &&
            currMonth === childrensDay.getMonth()||
            i === christmas.getDate() &&
            currMonth === christmas.getMonth()||
            i === christmasEve.getDate() &&
            currMonth === christmasEve.getMonth()||
            i === independence.getDate() &&
            currMonth === independence.getMonth()) {
            liTag += `<li class="holiday">${i}</li>`;
        }
        else{
            liTag += `<li class="${isToday}">${i}</li>`;
        }
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
    
};
renderCalendar();
prevNextIcon.forEach((icon) => {
    // getting prev and next icons
    icon.addEventListener("click", () => {
        // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});
