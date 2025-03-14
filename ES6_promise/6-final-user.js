import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error.toString() }), // Ensure error is converted to a string
  );

  const photoPromise = uploadPhoto(fileName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error.toString() }), // Convert error to string
  );

  return Promise.allSettled([userPromise, photoPromise]).then((results) =>
    results.map((result) => ({
      status: result.status,
      value: result.reason || result.value, // Include either reason or value
    })),
  );
}
