// // Usage: getRandomInt(6)
// // Outputs a random number between 1 and max
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max)) + 1
// }

// // Goal: Read the "Musicessories" database into memory; write information
// // about products and promotions to the JavaScript Console.
// // - PART 1: Write out the number of products/promotions in the database, in a human-readable
// //   format, to the JavaScript console, e.g. "There are x products."
// // - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
// //   console – the name, description, and price should each be on its own line, and the
// //   price should be formatted like "$5.49 each".
// // - PART 3: Get a random promotion from the list of promotions. Display the description of the
// //   promotion, along with the appropriate emoji.
// //   - Discount = 🤑
// //   - Shipping = 🚛
// //   - Contest = 🏆

// // Code that runs when the page finishes loading
// document.addEventListener('DOMContentLoaded', async function() {
//   // retrieves data from products API endpoint
//   let response = await fetch('https://kiei451.com/api/products.json')
//   let data = await response.json()

//   // writes the product data to the JavaScript console
//   console.log(data)

//   // 🔥 YOUR CODE GOES HERE 🔥
//   // Write the recipe (algorithm) in the comments. Then, write the code.

//   // PART 1
//   // Figure out how products there are, and store that number in memory
//   let numberProducts = data.products.length 

//   // Figure out how promotions there are, and store that number in memory
//   let numberPromos = data.promotions.length 

//   // Write the number of products to the JavaScript console
//   console.log(`The number of products is ${numberProducts}`)

//   // Write the number of promotions to the JavaScript console
//   console.log(`The number of products is ${numberPromos}`)

//   // PART 2
//   // Store the first product in memory
//   let productFirst = data.products[0]
  
//   // Write the first product to the JavaScript console, on three separate lines
//   console.log(`Name: ${productFirst.name}`)
//   console.log(`Price: ${productFirst.price}`)
//   console.log(`Description: ${productFirst.description}`)

//   // Repeat for the 2nd and 3rd products
//   // Store the second product in memory
//   let productSecond = data.products[1]
//   // Write the product to the JavaScript console, on three separate lines
//   console.log(`Name: ${productSecond.name}`)
//   console.log(`Price: ${productSecond.price}`)
//   console.log(`Description: ${productSecond.description}`)
//   // Store the third product in memory
//   let productThird = data.products[2]
//   // Write the product to the JavaScript console, on three separate lines
//   console.log(`Name: ${productThird.name}`)
//   console.log(`Price: ${productThird.price}`)
//   console.log(`Description: ${productThird.description}`)
//   // PART 3
//   // Get a random integer between 1 and 10
//   let randomNumber = getRandomInt (data.promotions.length)

//   // Subtract one from that random integer because Arrays are zero-based
//   let newNumber = randomNumber - 1

//   // Use the random integer to grab a promotion from the Array of promotions
//   let promotionRandom = data.promotions[newNumber]

//   // and store it in memory
//   // Figure out which emoji should be displayed, store it in memory
//   let productImage = ""
  
//   if (promotionRandom.type == `discount`){
//     promotionImage = `🤑`
//   } else if (promotionRandom.type == `shipping`){
//     promotionImage = `🚛`
//   } else{
//     promotionImage = `🏆`
//   }

//   // Create a sentence that displays the emoji along with the description 
//   // of the promotion
//   console.log(`${promotionImage} ${promotionRandom.description}`)

//   // Write the sentence to the JavaScript console

//   // 🔥 YOUR CODE ENDS HERE 🔥
// })


// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Read the "Musicessories" database into memory; write information
// about products and promotions to the JavaScript Console.
// - PART 1: Write out the number of products/promotions in the database, in a human-readable
//   format, to the JavaScript console, e.g. "There are x products."
// - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
//   console – the name, description, and price should each be on its own line, and the
//   price should be formatted like "$5.49 each".
// - PART 3: Get a random promotion from the list of promotions. Display the description of the
//   promotion, along with the appropriate emoji.
//   - Discount = 🤑
//   - Shipping = 🚛
//   - Contest = 🏆

// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from products API endpoint
  let response = await fetch('https://kiei451.com/api/products.json')
  let data = await response.json()

  // writes the product data to the JavaScript console
  console.log(data)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // PART 1
  // Figure out how products there are, and store that number in memory
  let numberOfProducts = data.products.length

  // Figure out how promotions there are, and store that number in memory
  let numberOfPromotions = data.promotions.length

  // Write the number of products to the JavaScript console
  console.log(`There are ${numberOfProducts} products.`)

  // Write the number of promotions to the JavaScript console
  console.log(`There are ${numberOfPromotions} promotions.`)

  // PART 2
  // Store the first product in memory
  let product = data.products[0]

  // Write the first product to the JavaScript console, on three separate lines
  console.log(product.name)
  console.log(product.description)
  console.log(`$${product.price} each`)

  // Repeat for the 2nd and 3rd products
  // Store the second product in memory
  product = data.products[1]

  // Write the product to the JavaScript console, on three separate lines
  console.log(product.name)
  console.log(product.description)
  console.log(`$${product.price} each`)
  
  // Store the third product in memory
  product = data.products[2]

  // Write the product to the JavaScript console, on three separate lines
  console.log(product.name)
  console.log(product.description)
  console.log(`$${product.price} each`)

  // PART 3
  // Get a random integer between 1 and 10
  let randomInt = getRandomInt(10)

  // Subtract one from that random integer because Arrays are zero-based
  randomInt = randomInt - 1

  // Use the random integer to grab a promotion from the Array of promotions
  // and store it in memory
  let promotion = data.promotions[randomInt]

  // Figure out which emoji should be displayed, store it in memory
  let emoji
  if (promotion.type == 'discount') {
    emoji = `🤑`
  } else if (promotion.type == 'shipping') {
    emoji = `🚛`
  } else {
    emoji = `🏆`
  }

  // Create a sentence that displays the emoji along with the description 
  // of the promotion
  let sentence = `${emoji} ${promotion.description}`

  // Write the sentence to the JavaScript console
  console.log(sentence)

  // 🔥 YOUR CODE ENDS HERE 🔥
})