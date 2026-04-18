
const getUsersDB = () => {
  if (typeof window === 'undefined') return []; 
  const db = localStorage.getItem('architect_users_db');
  return db ? JSON.parse(db) : [];
};


const saveUsersDB = (users: any[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('architect_users_db', JSON.stringify(users));
  }
};


export const mockRegisterApi = async (name: string, email: string, password: string) => {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const users = getUsersDB();
  

  if (users.find((u: any) => u.email === email)) {
    throw new Error('Este e-mail já está registrado.');
  }


  const newUser = {
    id: Math.random().toString(36).substring(2, 9),
    name,
    email,
    password, 
  };


  users.push(newUser);
  saveUsersDB(users);


  return {
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token_payload.mock_signature',
  };
};

export const mockLoginApi = async (email: string, password: string) => {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const users = getUsersDB();
  

  const user = users.find((u: any) => u.email === email && u.password === password);

  if (user) {
    return {

      user: { id: user.id, name: user.name, email: user.email },

      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token_payload.mock_signature',
    };
  }

  throw new Error('Credenciais inválidas ou usuário não encontrado.');
};