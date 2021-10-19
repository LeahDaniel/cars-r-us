const database = {
    paints: [
        {id: 1, color: "Silver", price: 120.50},
        {id: 2, color: "Midnight Blue", price: 145.35},
        {id: 3, color: "Firebrick Red", price: 180.20},
        {id: 4, color: "Spring Green", price: 178.23}
    ],
    interiors: [
        {id: 1, material: "Beige Fabric", price: 340},
        {id: 2, material: "Charcoal Fabric", price: 420},
        {id: 3, material: "White Leather", price: 570},
        {id: 4, material: "Black Leather", price: 580}
    ],
    technologies: [
        {id: 1, package: "Basic Package", price: 300},
        {id: 2, package: "Navigation Package", price: 400},
        {id: 3, package: "Visibility Package", price: 500},
        {id: 4, package: "Ultra Package", price: 600}
    ],
    wheels: [
        {id: 1, type: "17-in Pair Radial", price: 156},
        {id: 2, type: "17-in Pair Radial Black", price: 178},
        {id: 3, type: "18-in Pair Spoke Silver", price: 182},
        {id: 4, type: "18-in Pair Spoke Black", price: 189}
    ],
    models: [
        {id: 1, model: "Sedan"},
        {id: 2, model: "SUV"},
        {id: 3, model: "Truck"}
    ],
    customOrders:[

    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getModels = () => {
    return database.models.map(model => ({...model}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setModel = (id) => {
    database.orderBuilder.modelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    if (lastIndex === -1){
        newOrder.id = 1
    } else {
        newOrder.id = database.customOrders[lastIndex].id + 1
    }

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}