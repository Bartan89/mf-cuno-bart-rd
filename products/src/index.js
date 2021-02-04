import faker from 'faker'

const products =
    `
    <div>${faker.commerce.productName()}</div>
    <div>${faker.commerce.productName()}</div>
    <div>${faker.commerce.productName()}</div>
    `
document.querySelector('#dev-products').innerHTML = products