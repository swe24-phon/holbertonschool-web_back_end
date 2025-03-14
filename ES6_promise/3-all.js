import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    uploadPhoto()
      .then((photo) => {
        createUser()
          .then((user) => {
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
            resolve();
          })
          .catch(() => {
            console.log('Signup system offline');
            reject();
          });
      })
      .catch(() => {
        console.log('Signup system offline');
        reject();
      });
  });
}
