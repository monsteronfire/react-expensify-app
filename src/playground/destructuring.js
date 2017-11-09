// Object Destructuring
//const book = {
  //title: 'Ego is the enemy',
  //author: 'Ryan Holiday',
  //publisher: {
    //name: 'Penguin'
  //}
//};

//const { name: publisherName = 'Self-Published' } = book.publisher;

//console.log(publisherName);


// Array Destructuring

//const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

//const [ street, city, state, zip ] = address;
//const [ , city, state] = address;

//console.log(`You are in ${city} ${state}`);

const item  = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ drinkName, , mediumPrice] = item;

console.log(`A medium ${drinkName} costs ${mediumPrice}`);
