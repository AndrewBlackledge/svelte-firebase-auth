import { type Auth, type AuthProvider, signInWithPopup } from "@firebase/auth";

export interface SignedInUser {
  signedIn: true;
  uid: string;
  name: string;
  email: string;
  photo: string;
  last: number; // Date.getTime()
}

export interface SignedOutUser {
  signedIn: false;
}

export type User = SignedInUser | SignedOutUser;
