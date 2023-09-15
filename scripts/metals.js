import { setMetalId } from "./transientstate.js"
// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.

const handleMetalChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "metal") {
        setMetalId(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let optionsHTML = "<h2>Metals</h2>"

    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

document.addEventListener("change", handleMetalChoice)