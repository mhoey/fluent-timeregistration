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
setTheme,
FluentDesignSystem } from '@fluentui/web-components';
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

const renderActivityTable = (activities) => {
    let activitySelectElement = document.getElementById("acs")

    if (activities && activities.length > 0) {
        // Get first table row and use as template
        let tableBody = document.querySelector("#alta > tbody")

        if (tableBody) {
            let childNodeList = tableBody.childNodes
            let childArray = [...childNodeList]
            childArray.forEach(c =>
                tableBody.removeChild(c)
            )
            // Rebuild table
            let rowIndex = 0
            activities.forEach(a => {
                let rowElement = document.createElement("tr")
                rowElement.id = `alr${rowIndex++}`
                let hoursElement = document.createElement("td")
                let startElement = document.createElement("td")
                let endElement = document.createElement("td")
                let activityElement = document.createElement("td")
                hoursElement.textContent = a.hours
                startElement.textContent = time.format(a.startTime.toString())
                endElement.textContent = time.format(a.endTime.toString())
                activityElement.textContent = activitySelectElement.children[0].children[a.activity].innerText
                rowElement.appendChild(hoursElement)
                rowElement.appendChild(startElement)
                rowElement.appendChild(endElement)
                rowElement.appendChild(activityElement)
                tableBody.appendChild(rowElement)
            })
        }
    }
}

const addActivity = () => {
    let activitySelectElement = document.getElementById("acs")
    let hourEntryElement = document.getElementById("heh")
    let addMode = document.getElementById("tet").checked

    let hours = Number.parseFloat(hourEntryElement.value.replace(",","."))
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

    document.getElementById("emt").addEventListener("blur", (blurEvent) => {
        registrationModel.setDayDurationStart(blurEvent.target.value)
    })

    document.getElementById("elt").addEventListener("blur", (blurEvent) => {
        registrationModel.setDayDurationEnd(blurEvent.target.value)
    })

    registrationModel.addEventListener("daydurationchange", renderWorkHours)
    registrationModel.addEventListener("activitychange", renderActivityTable)


    // document.getElementById("exlt").addEventListener("change", crossValidation)
    // document.getElementById("ewd").addEventListener("change", changeDay)
    // document.getElementById("tet").addEventListener("change", toggleTimeEntry)
    document.getElementById("aact").addEventListener("click", addActivity)

}
document.addEventListener("DOMContentLoaded", init, false)