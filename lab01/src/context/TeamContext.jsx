import { createContext, useContext, useState } from 'react';
import { users as initialUsers } from '../data/users';

const TeamContext = createContext();

export function TeamProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);

  const addEmployee = (employee) => {
    setUsers((prev) => [...prev, { ...employee, id: prev.length + 1 }]);
  };

  const getEmployee = (id) => {
    return users.find((u) => u.id === parseInt(id));
  };

  return (
    <TeamContext.Provider value={{ users, addEmployee, getEmployee }}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error('useTeam must be used within a TeamProvider');
  }
  return context;
}
