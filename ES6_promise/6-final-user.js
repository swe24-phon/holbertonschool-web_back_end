import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Process both promises
  const userPromise = signUpUser(firstName, lastName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error.toString() }),
  );

  const photoPromise = uploadPhoto(fileName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error.toString() }), // Ensures error is in string format
  );

  // Use Promise.all for consistent structure
  return Promise.all([userPromise, photoPromise]);
}
