//Helper functions for our React App

//Selects a random item from an array
function randChoice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

//Removes
function removeItem(items, item) {
    const idx = items.indexOf(item);
    if (idx > -1) {
      items.splice(idx,1);
      return items;
    }
    return undefined;
}
  
  
  export {randChoice, removeItem}