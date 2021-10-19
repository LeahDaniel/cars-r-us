import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "wheel") {
            setWheel(parseInt(clickEvent.target.value))
        }
    }
)

export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheel">
            <option value="0">Select a wheel type</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.type}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
