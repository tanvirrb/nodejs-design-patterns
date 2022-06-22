const localStorage = require('./localStorage');

console.info('localStorage length: ', localStorage.length);

const uid = localStorage.getItem('user_id');

console.info('user_id: ', uid);

if (!uid) {
  console.info('User ID not found. Setting the user id and token...');
  localStorage.setItem('token', 'db770ffce62e09f233960052f8882a07');
  localStorage.setItem('user_id', '12345');
} else {
  console.info('User ID found.', uid);
  console.info('clearing the User ID...');
  localStorage.clear();
}
