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
    element.value = element.value.replace(/[^0-9]/, '')
    element.value = element.value.substring(0, 4)

}

const timeEntryFocus = (focusEvent) => {
    let element = focusEvent.target
    if (element.value) element.value = element.value.replace(':', '')
    focusEvent.srcElement.style.color = "black"
}

const timeEntryBlur = (blurEvent) => {
    let elementValue = blurEvent.target.value
    if (!time.valid(elementValue)) blurEvent.srcElement.style.color = "red"
    elementValue = time.format(elementValue)
    blurEvent.target.value = elementValue
}

// const changeDay = (changeEvent) => {
//     let meetTimeElement = document.getElementById("emt")
//     let leaveTimeElement = document.getElementById("elt")
//     let excludeLunch = document.getElementById("exlt")
//     let daySelected = changeEvent.srcElement.value

//     let weekEntry = weekEntries.get(daySelected)
//     if (weekEntry) {
//         meetTimeElement.value = time.format(weekEntry.meetingTime)
//         leaveTimeElement.value = time.format(weekEntry.leaveTime)
//         excludeLunch.checked = weekEntry.excludeLunch
//     } else {
//         meetTimeElement.value = ""
//         leaveTimeElement.value = ""
//         excludeLunch.checked = false
//     }
//     crossValidation()
// }

// const crossValidation = () => {
//     let daySelectElement = document.getElementById("ewd")
//     let meetTimeElement = document.getElementById("emt")
//     let leaveTimeElement = document.getElementById("elt")
//     let excludeLunch = document.getElementById("exlt")

//     if (meetTimeElement && meetTimeElement.value != "" && leaveTimeElement && leaveTimeElement.value != "") {
//         let meetValue = meetTimeElement.value.replace(/[^0-9]/g, '')
//         let leaveValue = leaveTimeElement.value.replace(/[^0-9]/g, '')

//         if (validTime(meetValue) && validTime(leaveValue)) {
//             let reduceTime = 0
//             if (excludeLunch.checked) reduceTime = 30

//             let diff = diffTime(meetValue, leaveValue, reduceTime)

//             let weekDay = daySelectElement.value
//             weekEntries.set(weekDay, {
//                 meetingTime: meetValue,
//                 leaveTime: leaveValue,
//                 excludeLunch: excludeLunch.checked,
//             })
//         } else {
//             totalDaySection.innerText = ""
//         }
//     } else {
//         totalDaySection.innerText = ""
//     }
// }

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
    let today = registrationModel.today()
    if (today) {
        document.getElementById("emt").value = time.format(today.meetingTime)
        document.getElementById("elt").value = time.format(today.leaveTime)
    } else {
        document.getElementById("emt").value = ""
        document.getElementById("elt").value = ""
    }
    renderActivityTable()
}

const addActivity = () => {
    let activitySelectElement = document.getElementById("acs")
    let hourEntryElement = document.getElementById("heh")
    let addMode = document.getElementById("tet").checked

    let hours = Number.parseFloat(hourEntryElement.value.replace(",", "."))
    registrationModel.addActivityHours(hours, activitySelectElement.value)
}


const init = () => {
    // Assign event listeners
    let queryResult = document.querySelectorAll("fluent-text-input[data-format='hhmm']")
    let timeFields = Array.from(queryResult)
    timeFields.map(tf => {
        tf.addEventListener("focus", timeEntryFocus)
        // tf.addEventListener("input", (inputEvent) => { timeEntry(inputEvent); crossValidation() })
        tf.addEventListener("blur", timeEntryBlur)
    })

    document.getElementById("elb").selectOption(0)
    document.getElementById("ewd").addEventListener("change", (changeEvent) => {
        registrationModel.setWeekDay(changeEvent.target.value)
    })

    document.getElementById("emt").addEventListener("blur", (blurEvent) => {
        registrationModel.setDayDurationStart(blurEvent.target.value)
    })

    document.getElementById("elt").addEventListener("blur", (blurEvent) => {
        registrationModel.setDayDurationEnd(blurEvent.target.value)
    })

    registrationModel.addEventListener("weekdaychange", renderAll)
    registrationModel.addEventListener("daydurationchange", renderActivityTable)
    registrationModel.addEventListener("activitychange", renderActivityTable)

    let activitySection = document.getElementById("act")
    let activityTemplate = document.getElementById("he")

    registrationModel.activityMap.entries().forEach(act => {
        let activityElement = activityTemplate.content.cloneNode(true)
        activityElement.querySelector(".he-act").textContent = act[1]
        activityElement.querySelector(".he-te").addEventListener("blur", (blurEvent) => {  
            registrationModel.addActivityHours(
                blurEvent.target.value, act[0]
            )
        })
        activitySection.appendChild(activityElement)
    })


}
document.addEventListener("DOMContentLoaded", init, false)