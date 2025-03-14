import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const response = await uploadPhoto();
    console.log(response.body, response.firstName, response.lastName);
  } catch {
    return console.log('Signup system offline');
  }
}
