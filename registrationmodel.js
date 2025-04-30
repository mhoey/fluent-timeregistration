import { time } from "./time"

const registrationModel = {
    weekDay: "1",
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

    getWeekEntries: () => localWeekEntries,

    triggerListeners: (eventType, eventData) => {
        let listeners = registrationModel.eventListeners.get(eventType)
        if (listeners) {
            listeners.forEach(x => {
                if (eventData) {
                    x(eventData)
                } else {
                    x()
                }
            }
            )
        }
    },

    triggerDayDurationEvent: () => {
        let dayEntry = registrationModel.today()
        if (dayEntry) {
            if (dayEntry.meetingTime && dayEntry.leaveTime) {
                let dayDuration = time.diff(dayEntry.meetingTime, dayEntry.leaveTime, 0)
                registrationModel.triggerListeners("daydurationchange", dayDuration)
            }
        }
    },

    triggerActivityChangeEvent: (activities) => {
        registrationModel.triggerListeners("activitychange", activities) 
    },

    today : () => {
        return registrationModel.localWeekEntries.get(registrationModel.weekDay)
    },

    setWeekDay: (weekDay) => {
        registrationModel.weekDay = weekDay
        registrationModel.triggerListeners("weekdaychange")
        registrationModel.triggerDayDurationEvent()
    },
    setDayDuration : (time, meetOrLeave) => {
        if (!time) return
        time = time.replace(/[^0-9]/g, '')
        let dayEntry = registrationModel.today()
        if (!dayEntry) {
            registrationModel.localWeekEntries.set(registrationModel.weekDay, {})
            dayEntry = registrationModel.localWeekEntries.get(registrationModel.weekDay)
        }
        switch (meetOrLeave) {
            case "meet": dayEntry.meetingTime = time; break
            case "leave": dayEntry.leaveTime = time; break
        }
        console.log(dayEntry)
        registrationModel.triggerDayDurationEvent()
    },
    setDayDurationStart: (startTime) => {
        registrationModel.setDayDuration(startTime, "meet")
    },
    setDayDurationEnd: (endTime) => {
        registrationModel.setDayDuration(endTime, "leave")
    },
    addActivityHours: (hours, activity) => {
        let fakeMeetingTime = time.timespanFromHours(800, hours)
        let dayEntry = registrationModel.today()
        if (!dayEntry) {
            // Ok not found we need to create a default entry
            registrationModel.localWeekEntries.set(registrationModel.weekDay, {
                meetingTime: fakeMeetingTime[0],
                leaveTime: fakeMeetingTime[1],
                excludeLunch: false,
            })
            dayEntry = registrationModel.localWeekEntries.get(registrationModel.weekDay)
            // Create a list of activities on the day
            dayEntry.activities = [
                {
                    activity: activity,
                    startTime: fakeMeetingTime[0],
                    endTime: fakeMeetingTime[1],
                    hours: hours
                }
            ]
        } else {
            if (!dayEntry.activities || dayEntry.activities.length === 0) {
                dayEntry.activities = [
                    {
                        activity: activity,
                        startTime: fakeMeetingTime[0],
                        endTime: fakeMeetingTime[1],
                        hours: hours
                    }
                ]
            } else {
                let latestActivityEntry = dayEntry.activities[dayEntry.activities.length - 1]
                let activityTime = time.timespanFromHours(latestActivityEntry.endTime, hours)
                dayEntry.activities.push(
                    {
                        activity: activity,
                        startTime: activityTime[0],
                        endTime: activityTime[1],
                        hours: hours
                    })
            }

        }
        registrationModel.triggerActivityChangeEvent(dayEntry.activities)
    }

}

export {
    registrationModel
}