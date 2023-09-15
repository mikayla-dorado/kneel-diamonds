const transientState = {
    "styleId": 0,
    "metalId": 0,
    "sizeId": 0,
}


export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setPrice = (chosenPrice) => {
    transientState.price = chosenPrice
    console.log(transientState)
}


// Function to convert transient state to permanent state aka; post the users order to the API

export const saveOrderSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

   const customEvent = new CustomEvent("newOrdercreated")
   document.dispatchEvent(customEvent)
}


