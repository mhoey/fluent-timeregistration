import { time } from './time.js'
import { registrationModel } from './registrationmodel.js'

const timeEntry = (inputEvent) => {
    let element = inputEvent.target
    element.value = time.trim(element.value)
}

const timeEntryFocus = (focusEvent) => {
    let element = focusEvent.target
    if (element.value) element.value = element.value.replace(':', '')
    focusEvent.srcElement.select()    
    focusEvent.srcElement.style.color = "black"
}

const timeEntryBlur = (blurEvent) => {
    let elementValue = blurEvent.target.value
    if (!time.valid(elementValue))
        blurEvent.srcElement.style.color = "red"
    else
        blurEvent.srcElement.style.color = "black"
    elementValue = time.format(elementValue)
    blurEvent.target.value = elementValue
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
                let dayColumn = tableBody.children[0].children[i - 1]
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
            let haw = registrationModel.calculateDayHours(`${i}`)
            let ach = registrationModel.activityHours(`${i}`)
            tableBody.children[1].children[i - 1].innerHTML = `Hours @ work: ${haw} <br/> Hours of activity: ${ach}`
        }
    }
}

const renderAll = () => {
}

const addActivity = () => {
    const start = document.getElementById("emt").value
    const end = document.getElementById("elt").value

    const trimmedStart = time.trim(start)
    const trimmedEnd = time.trim(end)

    if (time.valid(trimmedStart) && time.valid(trimmedEnd)) {
        registrationModel.addActivity(trimmedStart, trimmedEnd)
        //document.getElementById("emt").value = time.format('0000')
        //document.getElementById("elt").value = time.format('0000')
    }
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]


const renderWeekdaySections = () => {
    const weekdaySection = document.getElementById("weekday-sections")
    weekdaySection.innerHTML = "" // Clear existing content

    weekdays.forEach((day, index) => {
        const activities = registrationModel.activitiesForDay(`${index + 1}`)
        if (activities.length != 0) {
            const template = document.getElementById("weekday-template").content.cloneNode(true)
            const dayCard = template.querySelector(".daycard")
            const weekdayHeader = template.querySelector(".weekday")
            const dayTotal = template.querySelector(".daytotalduration")
            const activityTableBody = template.querySelector(".activitytable > tbody")

            weekdayHeader.textContent = day
            dayTotal.textContent = registrationModel.calculateDayHours(`${index + 1}`)
            activities.forEach(a => {
                const row = document.createElement("tr")
                row.innerHTML = `
                        <td>${time.format(a.startTime)}</td>
                        <td>${time.format(a.endTime)}</td>
                        <td>${time.diff(a.startTime, a.endTime, registrationModel.isLunchBreak(a) ? registrationModel.reduceTime : 0)}</td>
                    `
                activityTableBody.appendChild(row)
            })
            weekdaySection.appendChild(dayCard)
        } else {
            const template = document.getElementById("weekday-template-no-entry").content.cloneNode(true)
            const dayCard = template.querySelector(".daycard")
            const weekdayHeader = template.querySelector(".weekday")
            weekdayHeader.textContent = day
            weekdaySection.appendChild(dayCard)
        }

    })
}

const renderWeekTotal = () => {
    const weekTotalTemplate = document.getElementById("weektotal-template").content.cloneNode(true)
    const weekTotalSection = document.querySelector("#week-total")
    const weekTotalTableBody = weekTotalTemplate.querySelector(".weektotaltable > tbody")
    const weekTotalTableFoot = weekTotalTemplate.querySelector(".weektotaltable > tfoot")

    weekTotalSection.innerHTML = ""
    let totalWeekHours = 0
    for (let i = 1; i <= 5; i++) {
        const entry = registrationModel.getWeekEntries().get(`${i}`)
        const dayHours = registrationModel.calculateDayHours(`${i}`)
        if (entry) {
            const row = document.createElement("tr")
            row.innerHTML = `
                <td>${weekdays[i - 1]}</td>
                <td>${dayHours}</td>
            `
            weekTotalTableBody.appendChild(row)
            totalWeekHours += dayHours
        }
    }

    const totalRow = document.createElement("tr")
    totalRow.innerHTML = `
        <td>Total</td>
        <td class="weektotalduration">${totalWeekHours}</td>
    `
    weekTotalTableFoot.appendChild(totalRow)

    weekTotalSection.appendChild(weekTotalTemplate)
}

const renderActivityChange = () => {
    renderWeekdaySections()
    renderWeekTotal()
}

const init = () => {
    // Assign event listeners
    let queryResult = document.querySelectorAll("input[type='text']")
    let timeFields = Array.from(queryResult)
    timeFields.map(tf => {
        tf.addEventListener("focus", timeEntryFocus)
        tf.addEventListener("blur", timeEntryBlur)
    })

    document.getElementById("ewd").value = 1
    document.getElementById("ewd").addEventListener("change", (changeEvent) => {
        registrationModel.setWeekDay(changeEvent.target.value)
    })

    document.getElementById("aact").addEventListener("click", () => { addActivity() })

    // Handle lunch break checkbox
    const exltCheckbox = document.getElementById("exlt")
    exltCheckbox.addEventListener("change", (changeEvent) => {
        registrationModel.setReduceLunch(changeEvent.target.checked)
    })

    //registrationModel.addEventListener("weekdaychange", renderAll)
    //registrationModel.addEventListener("daydurationchange", renderActivityTable)
    registrationModel.addEventListener("activitychange", renderActivityChange)
    renderWeekdaySections()
    renderWeekTotal()
}
document.addEventListener("DOMContentLoaded", init, false)
