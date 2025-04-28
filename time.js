const time = {
    valid : (timeValue) => {
        let valid = true
        if (/^\s*$/.test(timeValue)) {
            valid = false
        } else {
            try {
                let numericValue = Number.parseInt(timeValue)
                if (numericValue < 100) {
                    valid = false
                } else {
                    let h = Math.floor(numericValue / 100)
                    let m = numericValue % 100
                    if (h > 23) valid = false
                    if (m > 59) valid = false
                }
            } catch (_) {
                valid = false
            }
        }
        return valid
    },
    
    diff : (timeValue1, timeValue2, reduceMin) => {
        try {
            let value1 = Number.parseInt(timeValue1)
            let value2 = Number.parseInt(timeValue2)
    
            let min1 = Math.floor(value1 / 100) * 60 + (value1 % 100)
            let min2 = Math.floor(value2 / 100) * 60 + (value2 % 100) - reduceMin
    
            if (min1 > min2) return 0
    
            let diffInMin = min2 - min1
            let h = Math.floor(diffInMin / 60)
            let m = Math.round(((diffInMin % 60) * 100 / 60)) / 100
            return h + m
        } catch (_) {
            return 0
        }
    }, 
    
    timespanFromHours : (startTime, hours) => {
        let startTimeInMinutes = Math.floor(startTime / 100) * 60 + (startTime % 100)
        let hoursInMinutes = Math.floor(hours) * 60 + ((hours - Math.floor(hours)) * 60)
        let endTimeInMinutes = startTimeInMinutes + hoursInMinutes
    
        let h = Math.floor(endTimeInMinutes / 60)
        let m = endTimeInMinutes % 60
        let endTime = (h * 100) + m
        return [startTime, endTime]
    },
    
    format : (timeValue) => {
        if (timeValue.length > 2) {
            if (timeValue.length == 3) {
                timeValue = timeValue.padStart(4, "0")
            }
            let left = timeValue.slice(0, 2)
            let right = timeValue.slice(2, 4)
            timeValue = `${left}:${right}`
        }
        return timeValue
    }    
}

export { time }