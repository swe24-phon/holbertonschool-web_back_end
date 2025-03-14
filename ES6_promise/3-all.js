import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch {
    console.log('Signup system offline');
  }
}
