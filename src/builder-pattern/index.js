const PersonBuilder = require('./PersonBuilder');

const aron = new PersonBuilder('Aron')
  .makeEmployee()
  .makeManager()
  .withMoney(300)
  .withList(['chocolate', 'apple'])
  .build();

console.info(aron);
//Person {
//   name: 'Aron',
//   isEmployee: true,
//   isManager: true,
//   hours: 40,
//   money: 300,
//   shoppingList: [ 'chocolate', 'apple' ]
// }
