// userProgressService.js
import { db, auth } from './../config/firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const UpdateUserProgress = async (level) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'userProgress', user.uid);
      await updateDoc(userDocRef, {
        completedLevels: arrayUnion(level)
      });
    } else {
      console.log('No user is signed in.');
    }
  } catch (error) {
    console.error('Error updating user progress: ', error);
  }
};
