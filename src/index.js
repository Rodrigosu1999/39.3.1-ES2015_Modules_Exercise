import fruits from './fruits';
import {randChoice, removeItem} from './helpers';

let fruit = randChoice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = removeItem(fruits, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);