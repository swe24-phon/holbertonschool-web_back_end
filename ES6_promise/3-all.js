import uploadPhoto, { createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((response) => {
      console.log(response.body, response.firstName, response.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
