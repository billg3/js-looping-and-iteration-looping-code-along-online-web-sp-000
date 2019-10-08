// // Code your solutions in this file
//
// function writeCards(array, event){
//   ray = []
// for (let i = 0; i < array.length; i++){
//
//   ray.push('Thank you, ${array[i]}, for the wonderful ${event} gift!')
// }
// return ray
// }

function writeCards( array, event ) {
  let Cards = []
  for ( let i = 0; i < array.length; i++ ) {
    Cards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}
