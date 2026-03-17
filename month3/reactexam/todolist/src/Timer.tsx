import { useState } from "react";


const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date())
    }, 1000);

    return (
        <div>
            현재 시간: {time.toLocaleTimeString()}
        </div>
    );
}

/*
사라진 코드..
<h2>타이머: {time}초</h2>
<button onClick={
    function() {
        setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000)
    }
}>시작</button>
*/

export default Clock;