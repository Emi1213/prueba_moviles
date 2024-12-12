import { Injectable , inject} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

import {
  getFirestore,
  setDoc,
  getDoc,
  getDocs,
  doc,
  addDoc,
  collection,
  collectionData,
  query,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import {
  uploadString,
  getDownloadURL,
  deleteObject,
  ref,
  getStorage,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { UtilsService } from './utils.service';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  utilsSrvc = inject(UtilsService);

  getAuth() {
    return getAuth();
  }

  signIn(user: User) {
    return signInWithEmailAndPassword(
      this.getAuth(),
      user.email,
      user.password
    );
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(
      this.getAuth(),
      user.email,
      user.password
    );
  }

  

  sendResetPasswordEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  //obtener docs

  async getCollectionData(path: string, collectionQuery?: any) {
    const ref = collection(getFirestore(), path);
    const snapshot = await getDocs(ref);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  setDocumet(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //actualizar documento
  updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  //borrar documento
  deleteDocument(path: string) {
    return deleteDoc(doc(getFirestore(), path));
  }

  async getDocumet(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
    return getDownloadURL(ref(getStorage(), path))
    })
    }

  async getFilePath(url:string){
    return ref(getStorage(), url).fullPath;
  }

  deleteFile(path:string){
    return deleteObject(ref(getStorage(), path));
  }

  generateId() {
    return uuidv4();
  }

  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSrvc.routerLink('/auth');
  }
}
