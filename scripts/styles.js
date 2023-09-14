export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let optionsHTML = ""
    for (const style of styles) {
        optionsHTML += `${styles.id} ${styles.price} ${styles.style}`
    }


    return optionsHTML
}