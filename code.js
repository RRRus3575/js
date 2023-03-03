const colors = [`blue`, `red`, `tomato`, `yellow`, `purple`, `green`, `teal`];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;

const colorsTitle = [
  `#800000`,
  `#FDD9B5`,
  `#B5B8B1`,
  `#464451`,
  `#2F4F4F`,
  `#7FFFD4`,
  `#FBCEB1`,
];

const maxTitle = colorsTitle.length - 1;
const minTitle = 0;

const indexTitle = Math.round(Math.random() * (maxTitle - minTitle) + minTitle);

const colorTitle = colorsTitle[indexTitle];

console.log(colorTitle);

document.body.style.color = colorTitle;

// const salary = prompt("Кто ты по жизни?");
// if (salary < 501) {
//   alert("Цюцюдоцка");
// } else if (500 < salary && 1001 > salary) {
//   alert("Волшебное существо");
// } else if (1000 < salary && 1501 > salary) {
//   alert("Мое солнышко");
// } else if (1500 < salary && 2001 > salary) {
//   alert("Волшебное существо");
// } else if (2000 < salary && 2501 > salary) {
//   alert("Ты лучше всех");
// } else {
//   alert("Чтобы ты не нажала ты не делалал, ты все равно Чудо! И я тебя люблю!");
//

// const findBiggestNumber = function (numbers) {
//   let biggestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number >= biggestNumber) {
//       biggestNumber = number;
//     }
//   }
//   return biggestNumber;
// };

// console.log(findBiggestNumber([1, 5, 9, 12, 4, 15, 27, 30, 18, 11, 105]));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const masiv = firstArray.concat(secondArray);

//   return masiv.slice(0, maxLength);
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// const friends = [
//   { name: "Vasya", online: true },
//   { name: "Petya", online: false },
//   { name: "Irina", online: false },
//   { name: "Olesya", online: true },
//   { name: "Oleg", online: false },
// ];
// console.table(friends);

// const getFriends = function (allFriends) {
//   const statusFriends = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     console.log(friend.online);
//     if (friend.online) {
//       statusFriends.online.push(friend);
//       continue;
//     }
//     statusFriends.offline.push(friend);
//   }
//   return statusFriends;
// };

// console.log(getFriends(friends));

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       // console.log(item);

//       if (productName === item.name) {
//         console.log("нашли такой продукт", productName);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "pineapple", price: 70 });
// cart.add({ name: "pineapple", price: 70 });
// cart.add({ name: "plume", price: 30 });
// cart.add({ name: "plume", price: 30 });
// cart.add({ name: "plume", price: 30 });
// cart.add({ name: "plume", price: 30 });

// cart.remove("lemon");

// console.table(cart.getItems());
// console.log(cart.countTotalPrice());

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let potion of this.potions) {
//       const name = potion;
//       if (potionName === name) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },

//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }
// console.log(processCall("Mango", takeCall, activateAnsweringMachine));
// console.log(processCall("Poly", takeCall, leaveHoloMessage));

let counter = 0;

function comparison() {
  counter += 1;
}

comparison();
comparison();
comparison();
comparison();

console.log(counter);
