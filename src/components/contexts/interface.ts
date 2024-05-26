import { ReactNode } from 'react';

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserInterface {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  photoUrl: string;
  bio: string;
  gender: string;
  birthDate: number;
  role: 'USER' | 'ADMIN';
  username: string;
}
