export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let optionsHTML = ""

    for (const size of sizes) {
        optionsHTML += `${sizes.id} ${sizes.price} ${sizes.carets}`
    }


    return optionsHTML
}