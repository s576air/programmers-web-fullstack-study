const dayStart = "07:30";
const dayEnd = "17:45";

function parseTime(timeString) {
    let [hour, minute] = timeString.split(':');
    return [parseInt(hour), parseInt(minute)]
}

function addTime(time, durationMinutes) {
    time[1] += durationMinutes;
    while (time[1] > 60) {
        time[0]++;
        time[1] -= 60;
    }
    return time;
}

// 큰 값의 위치를 'left', 'right'로 반환. 같으면 'eq'반환.
function compareTime(time1, time2) {
    if (time1[0] > time2[0]) return 'left';
    if (time1[0] < time2[0]) return 'right';

    if (time1[1] > time2[1]) return 'left';
    if (time1[1] < time2[1]) return 'right';

    return 'eq';
}

// 야간근무를 상정하지 않았습니다.
function scheduleMeeting(startTime, durationMinutes) {
    let dayStartTime = parseTime(dayStart);
    let start = parseTime(startTime);

    let startCompare = compareTime(dayStartTime, start);
    if (startCompare == 'left') {
        return false;
    }
    
    let dayEndTime = parseTime(dayEnd);
    let end = addTime(start, durationMinutes);
    
    let endCompare = compareTime(dayEndTime, end);
    if (endCompare == 'right') {
        return false;
    }

    return true;
}

function logScheduleMeeting(answer, startTime, durationMinutes) {
    console.log(`정답: ${answer}, 내 답: ${scheduleMeeting(startTime, durationMinutes)}`)
}


logScheduleMeeting(false, "7:00", 15);
logScheduleMeeting(false, "07:15", 30);
logScheduleMeeting(true, "7:30", 30);
logScheduleMeeting(true, "11:30", 60);
logScheduleMeeting(true, "17:00", 45);
logScheduleMeeting(false, "17:30", 30);
logScheduleMeeting(false, "18:00", 15);