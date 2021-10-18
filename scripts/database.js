const database = {
    paints: [
        {id: 1, color: "silver", price: 120.50},
        {id: 2, color: "midnight blue", price: 145.35},
        {id: 3, color: "firebrick red", price: 180.20},
        {id: 4, color: "spring green", price: 178.23},
    ],
    interiors: [
        {id: 1, material: "beige fabric", price: 340},
        {id: 2, material: "charcoal fabric", price: 420},
        {id: 3, material: "white leather", price: 570},
        {id: 4, material: "black leather", price: 580},
    ],
    technologies: [
        {id: 1, package: "basic package", price: 300},
        {id: 2, package: "navigation package", price: 400},
        {id: 3, package: "visibility package", price: 500},
        {id: 4, package: "ultra package", price: 600},
    ],
    wheels: [
        {id: 1, type: "17-in pair radial", price: 156},
        {id: 2, type: "17-in pair radial black", price: 178},
        {id: 3, type: "18-in pair spoke silver", price: 182},
        {id: 4, type: "18-in pair spoke black", price: 189},
    ],
    customOrders:[
        {id:1, paintId: 2, interiorId: 3, technologyId: 1, wheelId: 4, timestamp: 1614659931693}
    ]
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

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}