export interface Account {
  id: string;
  username: string;
  password: string;
  role: 'admin' | 'hr' | 'staff';
  name: string;
  email: string;
}

export const accounts: Account[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Administrator',
    email: 'admin@company.com'
  },
  {
    id: '2',
    username: 'hr',
    password: 'hr123',
    role: 'hr',
    name: 'HR Manager',
    email: 'hr@company.com'
  },
  {
    id: '3',
    username: 'staff',
    password: 'staff123',
    role: 'staff',
    name: 'Staff Member',
    email: 'staff@company.com'
  }
];

export const authenticateUser = (username: string, password: string): Account | null => {
  const user = accounts.find(
    account => account.username === username && account.password === password
  );
  return user || null;
};