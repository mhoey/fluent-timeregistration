import {
    FieldDefinition,
    LabelDefinition,
    DropdownDefinition,
    ListboxDefinition,
    DropdownOptionDefinition,
    ButtonDefinition,
    TextInputDefinition,
    SwitchDefinition,
    CheckboxDefinition,
    BadgeDefinition,
    setTheme,
    FluentDesignSystem
} from '@fluentui/web-components';
import { webLightTheme, webDarkTheme } from '@fluentui/tokens'
import { time } from './time.js'
import { registrationModel } from './registrationmodel.js';

setTheme(webLightTheme)

FieldDefinition.define(FluentDesignSystem.registry)
LabelDefinition.define(FluentDesignSystem.registry)
DropdownDefinition.define(FluentDesignSystem.registry)
ListboxDefinition.define(FluentDesignSystem.registry)
DropdownOptionDefinition.define(FluentDesignSystem.registry)
ButtonDefinition.define(FluentDesignSystem.registry)
TextInputDefinition.define(FluentDesignSystem.registry)
SwitchDefinition.define(FluentDesignSystem.registry)
CheckboxDefinition.define(FluentDesignSystem.registry)
BadgeDefinition.define(FluentDesignSystem.registry)

const timeEntry = (inputEvent) => {
    let element = inputEvent.target
    element.value = time.trim(element.value)
}

const timeEntryFocus = (focusEvent) => {
    let element = focusEvent.target
    if (element.value) element.value = element.value.replace(':', '')
    focusEvent.srcElement.style.color = "black"
}

const timeEntryBlur = (blurEvent) => {
    let elementValue = blurEvent.target.value
    if (!time.valid(elementValue)) 
        blurEvent.srcElement.control.style.color = "red"
    else
        blurEvent.srcElement.control.style.color = "black"
    elementValue = time.format(elementValue)
    blurEvent.target.value = elementValue
}

const renderWorkHours = (workHours) => {
    let totalDaySection = document.getElementById("tdh")
    let daymessage = `You have been at work for ${workHours} hours`
    totalDaySection.innerText = daymessage
}

const toggleTimeEntry = (toggleEvent) => {
    let timeEntryElement = document.getElementById("timeentry")
    let hourEntryElement = document.getElementById("hourentry")

    if (toggleEvent.srcElement.checked) {
        timeEntryElement.removeAttribute("hidden")
        hourEntryElement.setAttribute("hidden", "")
    } else {
        hourEntryElement.removeAttribute("hidden")
        timeEntryElement.setAttribute("hidden", "")
    }
}

const renderActivityTable = () => {
    let entries = registrationModel.getWeekEntries()

    let activitySelectElement = document.getElementById("acs")

    let tableBody = document.querySelector("#alta > tbody")

    if (tableBody) {
        let dayIndex = 0
        for (let i = 1; i <= 5; i++) {
            let entry = entries.get(`${i}`)
            if (entry) {
                let dayColumn = tableBody.children[0].children[i-1]
                dayColumn.innerHTML = ""
                if (entry.activities) {
                    entry.activities.forEach(a => {
                        let cardTemplate = document.getElementById("ac").content.cloneNode(true)
                        cardTemplate.querySelector(".ac-act").textContent = registrationModel.activityMap.get(`${a.activity}`)
                        cardTemplate.querySelector(".ac-sten").textContent = `${time.format(a.startTime)} - ${time.format(a.endTime)}`
                        cardTemplate.querySelector(".ac-hours").textContent = a.hours
                        dayColumn.appendChild(cardTemplate)
                    })
                }
            }
            let haw = registrationModel.hoursAtWork(`${i}`)
            let ach = registrationModel.activityHours(`${i}`)
            tableBody.children[1].children[i-1].innerHTML = `Hours @ work: ${haw} <br/> Hours of activity: ${ach}`
        }
    }
}

const renderAll = () => {
}

const renderDayTotal = (overlapsActivity) => {
    if (overlapsActivity) {
        const message = "The activity you are trying to add overlaps with an existing activity. Please adjust the time range of the activity you are trying to add."
        alert(message)
        return
    }
    const dayTotal = registrationModel.calculateDayTotal()
    const th = document.getElementById("th")
    const tm = document.getElementById("tm")

    th.innerText = Math.floor(dayTotal)
    tm.innerText = Math.round(dayTotal * 100 - (Math.floor(dayTotal) * 100))
}

const addActivity = () => {
    const start = document.getElementById("emt").value
    const end = document.getElementById("elt").value

    const trimmedStart = time.trim(start)
    const trimmedEnd = time.trim(end)

     if (time.valid(trimmedStart) && time.valid(trimmedEnd)) {
        registrationModel.addActivity(trimmedStart, trimmedEnd)
    }
}

const renderWeekdaySections = () => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekdaySection = document.getElementById("weekday-sections");
    weekdaySection.innerHTML = ""; // Clear existing content

    weekdays.forEach((day, index) => {
        const template = document.getElementById("weekday-template").content.cloneNode(true);
        const dayCard = template.querySelector(".daycard");
        const weekdayHeader = template.querySelector(".weekday");
        const activityTableBody = template.querySelector(".activitytable > tbody");

        weekdayHeader.textContent = day;
        const activities = registrationModel.activitiesForDay(`${index + 1}`);
        if (activities) {
            activities.forEach(a => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${time.format(a.startTime)}</td>
                    <td>${time.format(a.endTime)}</td>
                    <td>${a.hours}</td>
                `;
                activityTableBody.appendChild(row);
            });
        }

        weekdaySection.appendChild(dayCard);
    });
};

const renderWeekTotal = () => {
    const weekTotalTemplate = document.getElementById("weektotal-template").content.cloneNode(true);
    const weekTotalSection = document.querySelector("#weekday-sections");
    const weekTotalTableBody = weekTotalTemplate.querySelector(".weektotaltable > tbody");

    for (let i = 1; i <= 5; i++) {
        const entry = registrationModel.getWeekEntries().get(`${i}`);
        if (entry) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${weekdays[i - 1]}</td>
                <td></td>
                <td></td>
                <td>${registrationModel.activityHours(`${i}`)}</td>
            `;
            weekTotalTableBody.appendChild(row);
        }
    }

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td>Total</td>
        <td></td>
        <td></td>
        <td class="weektotalduration">${registrationModel.calculateDayTotal()}</td>
    `;
    weekTotalTableBody.appendChild(totalRow);

    weekTotalSection.appendChild(weekTotalTemplate);
};

const init = () => {
    // Assign event listeners
    let queryResult = document.querySelectorAll("fluent-text-input[data-format='hhmm']")
    let timeFields = Array.from(queryResult)
    timeFields.map(tf => {
        tf.addEventListener("focus", timeEntryFocus)
        tf.addEventListener("blur", timeEntryBlur)
    })

    document.getElementById("elb").selectOption(0)
    document.getElementById("ewd").addEventListener("change", (changeEvent) => {
        registrationModel.setWeekDay(changeEvent.target.value)
    })

    document.getElementById("aact").addEventListener("click", () => { addActivity() })

    //registrationModel.addEventListener("weekdaychange", renderAll)
    //registrationModel.addEventListener("daydurationchange", renderActivityTable)
    registrationModel.addEventListener("activitychange", renderDayTotal)

    renderWeekdaySections();
    renderWeekTotal();
}
document.addEventListener("DOMContentLoaded", init, false)
