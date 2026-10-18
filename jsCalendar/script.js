const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");

const genCalendarButton = document.getElementById("gen-calendar");
const resetButton = document.getElementById("reset");

const calendarDisplay = document.getElementById("calendar-display");

function generateCalendar(){
    const year = parseInt(yearInput.value,10);
    const month = parseInt(monthInput.value,10);
    if(isNaN(year) || isNaN(month) || month > 12 || month < 1 || year < 1600) {
        calendarDisplay.textContent ="Please enter valid month and year";
        return;
    }
    const startingIndex = new Date(year,month -1,1).getDay();
    const daysInMonth = new Date(year,month,0).getDate();
    let html = "<table>";
    html += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>"
    html += "<tr>";
    for(let i = 0; i < startingIndex; i ++){
        html += "<td></td>";
    }
    for(let i = 1; i <= daysInMonth; i++){
        html += `<td>${i}</td>`;
        if ((startingIndex + i) % 7 === 0 && i !== daysInMonth){
            html += "</tr><tr>";
        }
    }
    const lastRow = (startingIndex + daysInMonth) % 7;
    if (lastRow > 0){
        for(let i = 0; i < 7 - lastRow; i++){
            html += "<td></td>";
        }
    }

    html += "</tr></table>";

    calendarDisplay.innerHTML = html;
}

function resetCalendar(){
    yearInput.value = "";
    monthInput.value = "";
    calendarDisplay.innerHTML = "";
}

genCalendarButton.addEventListener("click",generateCalendar);

resetButton.addEventListener("click",resetCalendar);