


export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()


//started html but need to finish
let HTML = ""
for (const metal of metals) {
    HTML += `${metals.id} ${metals.metal} ${metals.price}`
}
return HTML

}