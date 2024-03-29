import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "interior") {
            setInterior(parseInt(clickEvent.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select an interior material</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.material}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

