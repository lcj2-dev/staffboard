import { Board, Service } from '../typescript/interfaces';

// PLACEHOLDER DATA FOR DEMO PURPOSES

export const dummyBoards: Board[] = [
  { name: 'stow', isActive: true },
  { name: 'dock', isActive: false },
  { name: 'pick', isActive: false }
];

export const dummyServices: Service[] = [
  { name: 'roster', isActive: false },
  { name: 'attendance', isActive: false },
  { name: 'permissions', isActive: true }
];
