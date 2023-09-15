import { MetalOptions } from "./metals.js"
import { StyleOptions } from "./styles.js"
import { SizeOptions } from "./sizes.js"
import { OrderList } from "./orders.js"
import { saveOrder } from "./saveorder.js"

const container = document.querySelector('#container')


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await saveOrder()
    const orderHTML= await OrderList()

    const composedHTML = `

        <article class="choices">
            <section class="choices__metals options">
                
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                
                ${styleOptionsHTML}
            </section>
        </article>
        <br></br>

        <article class="customOrders">
        
                ${buttonHTML}
        </article>
        
    
        <article class="order">
            <h2>Custom Jewelry Orders</h2>
            ${orderHTML}
        </article>

       
    `
     container.innerHTML = composedHTML

}

document.addEventListener("newOrdercreated", render)

render()