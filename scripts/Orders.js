import { getInteriors, getWheels, getTechnologies, getPaints, getOrders } from "./database.js";

const interiors = getInteriors()
const wheels = getWheels()
const techs = getTechnologies()
const paints = getPaints()

const buildOrder = (order) => {
    const foundInterior = interiors.find(interior => interior.id === order.interiorId)
    const foundTech = techs.find(tech => tech.id === order.technologyId)
    const foundWheel = wheels.find(wheel => wheel.id === order.wheelId)
    const foundPaint = paints.find(paint => paint.id === order.paintId)
    
    const totalCost = foundInterior.price + foundTech.price + foundWheel.price + foundPaint.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li class="orderitem">
    ${foundPaint.color} car with ${foundWheel.type} wheels, ${foundInterior.material} interior, and the ${foundTech.package}: Total of ${costString}.
    </li>`
}

export const Orders = () => {
    const orders = getOrders()
    
    return `<h2>Custom Car Orders</h2>
        <ul>
            ${
                orders.map(buildOrder).join("")
            }
        </ul>
    `
}