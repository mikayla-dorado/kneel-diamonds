import { setStyleId } from "./transientstate.js"

const handleStyleChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "style") {
        setStyleId(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles") //calling for info on styles from database.json
    const styles = await response.json() //putting that info in variable named styles

    let optionsHTML = "<h2>Styles</h2>" //html header
    const divStringArray = styles.map( //.map is iterating through instead of forof loop
        (style) => {
          return `<div>
              <input type='radio' name='style' value='${style.id}' /> ${style.style} 
          </div>`
        }
    )
    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("") //adding html header and html together

    return optionsHTML //returing result of adding htmls together
}

document.addEventListener("change", handleStyleChoice)