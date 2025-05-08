import { time } from "./time"

const registrationModel = {
    weekDay: "1",
    localWeekEntries: new Map(),
    eventListeners: new Map(),
    activityMap: new Map([
        ["0","Login"],
        ["1","License"],
        ["2","EDN"],
        ["3","Meetings"]
    ]),

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

    getWeekEntries: () => registrationModel.localWeekEntries,

    hoursAtWork: (index) => {
        let diff = 0
        let entry = registrationModel.localWeekEntries.get(index)
        if (entry) {
            if (time.valid(entry.meetingTime) && time.valid(entry.leaveTime)) {
                diff = time.diff(entry.meetingTime, entry.leaveTime, 0)
            }
        }
        return diff
    },

    activityHours: (index) => {
        let totalDiff = 0
        let entry = registrationModel.localWeekEntries.get(index)
        if (entry) {
            if (entry.activities) {
                entry.activities.forEach(a => {
                    if (time.valid(a.startTime) && time.valid(a.endTime)) {
                        let diff = time.diff(a.startTime, a.endTime, 0)
                        totalDiff += diff
                    }        
                })
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
        if (!hours || hours === "") return
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

                let activities = dayEntry.activities.find(a => a.activity === activity)
                if (activities) {
                    activities.hours = hours
                } else {
                    dayEntry.activities.push(
                        {
                            activity: activity,
                            startTime: activityTime[0],
                            endTime: activityTime[1],
                            hours: hours
                        })
                }
            }

        }
        registrationModel.triggerActivityChangeEvent(dayEntry.activities)
    }

}

export {
    registrationModel
}