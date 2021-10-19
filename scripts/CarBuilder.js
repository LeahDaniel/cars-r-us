import { Technologies } from "./Technologies.js";
import { Paints } from "./Paints.js";
import { Wheels } from "./Wheels.js";
import { Interiors } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { Models } from "./Models.js";
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarBuilder = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
        </article>

        <article class="models">
            ${Models()}
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            ${Orders()}
        </article>
    `
}
