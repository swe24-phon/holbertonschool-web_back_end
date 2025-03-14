import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions and handle their promises
  const userPromise = signUpUser(firstName, lastName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error }),
  );

  const photoPromise = uploadPhoto(fileName).then(
    (value) => ({ status: 'fulfilled', value }),
    (error) => ({ status: 'rejected', value: error }),
  );

  // Return an array of promise results once all promises are settled
  return Promise.allSettled([userPromise, photoPromise]).then((results) =>
    results.map((result) => ({
      status: result.status,
      value: result.reason || result.value,
    })),
  );
}
