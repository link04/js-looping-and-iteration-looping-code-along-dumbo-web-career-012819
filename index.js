
const printBadges = (array) => {
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  } 
  return array;
}

const tailsNeverFails = () => {
  let tails = 0;
  while(Math.random() >= 0.5){
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}