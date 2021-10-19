import { getModels, setModel } from "./database.js"

const models = getModels()

document.addEventListener(
    "change",
    (clickEvent) => {
        if (clickEvent.target.id === "model") {
            setModel(parseInt(clickEvent.target.value))
        }
    }
)

export const Models = () => {
    return `<h2>Models</h2>
        <select id="model">
            <option value="0">Select a car model</option>
            ${
                models.map(
                    (model) => {
                        return `<option value="${model.id}">${model.model}</option>`
                    }
                ).join("")
            }
        </select>
    `
}