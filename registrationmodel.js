import { time } from "./time"

const registrationModel = {
    weekDay: "1",
    reduceLunch: true,
    reduceTime: 30,
    localWeekEntries: new Map(),
    eventListeners: new Map(),

    addEventListener: (eventType, eventCallback) => {
        let eventArray = registrationModel.eventListeners.get(eventType)
        if (eventArray) {
            eventArray.push(eventCallback)
        } else {
            registrationModel.eventListeners.set(eventType, [eventCallback])
        }
    },

    removeEventListener: (eventType, eventCallback) => {
        let eventArray = eventListeners.get(eventType)
        if (eventArray) {
            let listenerIndex = eventArray.indexOf(eventCallback)
            if (listenerIndex > -1) {
                eventArray.splice(listenerIndex, 1)
            }
        }
    },

    setReduceLunch: (reduceLunch) => {
        registrationModel.reduceLunch = reduceLunch
    },

    getWeekEntries: () => registrationModel.localWeekEntries,

    calculateDayHours: (index = null) => {
        let totalDiff = 0
        let entry = index ? registrationModel.localWeekEntries.get(index) : registrationModel.today()
        if (entry) {
            if (entry.activities) {
                entry.activities.forEach(a => {
                    if (time.valid(a.startTime) && time.valid(a.endTime)) {
                        let diff = time.diff(a.startTime, a.endTime, 0)
                        totalDiff += diff
                    }
                })
            }


            // Check for lunch break reduction
            if (registrationModel.reduceLunch) {
                const lunchBreakStart = "1130"
                const lunchBreakEnd = "1230"
                let lunchBreakOverlap = false

                entry.activities.forEach(a => {
                    if (time.valid(a.startTime) && time.valid(a.endTime)) {
                        if ((a.startTime < lunchBreakEnd && a.endTime > lunchBreakStart) ||
                            (a.startTime >= lunchBreakStart && a.endTime <= lunchBreakEnd)) {
                            lunchBreakOverlap = true
                        }
                    }
                })

                if (lunchBreakOverlap) {
                    totalDiff -= registrationModel.reduceTime / 60 // Convert minutes to hours
                }
            }
        }

        return totalDiff
    },

    triggerListeners: (eventType, eventData) => {
        let listeners = registrationModel.eventListeners.get(eventType)
        if (listeners) {
            listeners.forEach(x => {
                if (eventData) {
                    x(eventData)
                } else {
                    x()
                }
            })
        }
    },

    triggerActivityChangeEvent: (overlapsActivity) => {
        registrationModel.triggerListeners("activitychange", overlapsActivity)
    },

    today: () => {
        return registrationModel.localWeekEntries.get(registrationModel.weekDay)
    },

    activitiesForDay: (index) => {
        let entry = registrationModel.localWeekEntries.get(index)
        if (entry) {
            return entry.activities
        }
        return []
    },

    setWeekDay: (weekDay) => {
        registrationModel.weekDay = weekDay
        registrationModel.triggerListeners("weekdaychange")
    },

    addActivity: (startTime, endTime) => {
        const isRangeOverlappingExistingActivities = (startTime, endTime, activities) => {
            for (const activity of activities) {
                if (startTime < activity.endTime && endTime > activity.startTime) {
                    console.log(`Activity overlap detected:`)
                    console.log(`  Attempted: ${startTime} - ${endTime}`)
                    console.log(`  Conflicting: ${activity.startTime} - ${activity.endTime}`)
                    return true
                }
            }
            return false
        }
        let dayEntry = registrationModel.today()
        if (!dayEntry) {
            registrationModel.localWeekEntries.set(registrationModel.weekDay, {})
            dayEntry = registrationModel.localWeekEntries.get(registrationModel.weekDay)
        }
        if (!dayEntry.activities) {
            dayEntry.activities = []
        }
        if (!isRangeOverlappingExistingActivities(startTime, endTime, dayEntry.activities)) {
            dayEntry.activities.push({ startTime, endTime })
            registrationModel.triggerActivityChangeEvent(false)
        } else {
            registrationModel.triggerActivityChangeEvent(true)
        }
    },
}

export {
    registrationModel
}
