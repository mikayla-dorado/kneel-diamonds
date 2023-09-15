import { setSizeId } from "./transientstate.js"

const handleSizeChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "size") {
        setSizeId(parseInt(event.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let optionsHTML = "<h2>Sizes</h2>"

    const divStringArray = sizes.map(
        (size) => {
          return `<div>
              <input type='radio' name='size' value='${size.id}' /> ${size.carets}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}

document.addEventListener("change", handleSizeChoice)