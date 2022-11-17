// add colour to each heading withing a click of button,  one by one
// 1st heading with class of h1 - 1000ms
// 2nd heading with class of h2 - 2000ms
// 3rd heading with class of h3 - 3000ms

// 1.attach an event listener to button
// 2.create a function that will accept 3 parameters: css-selector,time,color
// 3.grab the dom element using css-selector
// 4.function needs to return new promise
// 5.promise is a function that accept 2 additional functions as parameters(resolve,reject).
// 6. inside the promise we check if the condition is met
// if DOMelement exists then change styles and resolve
// if DOMelement doesnt exist then reject
const addColour = (selector, time, color) => {
  const DOMelement = document.querySelector(selector);
  return new Promise((resolve, rejected) => {
    if (DOMelement) {
      setTimeout(() => {
        DOMelement.style.color = color;
        resolve();
      }, time);
    } else {
      rejected("incorrect selector,try again");
    }
  });
};

// using .then() we can chain multiple functions since we are returning promise again
document.querySelector("button").addEventListener("click", () => {
  addColour(".h1", 1000, "blue")
    .then(() => addColour(".h2", 2000, "green"))
    .then(() => addColour("h3", 3000, "gold"));
});
