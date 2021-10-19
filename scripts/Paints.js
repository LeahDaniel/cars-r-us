import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "paint") {
            setPaint(parseInt(clickEvent.target.value))
        }
    }
)

export const Paints = () => {
    return `<h2>Paints</h2>
        <select id="paint">
            <option value="0">Select a paint color</option>
            ${
                paints.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.color}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

