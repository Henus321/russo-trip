import { createContext, useState, useEffect } from 'react';
import { db } from '../utils/firebase/firebase.utils';
import { doc, getDoc } from 'firebase/firestore';

export const CompanyContext = createContext({
  admin: {},
  cities: [],
  contacts: {},
});

export const CompanyProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [admin, setAdmin] = useState({});
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const docRef = doc(db, 'company', 'companyData');
        const docSnap = await getDoc(docRef);

        const company = docSnap.data();

        const { admin, cities, contacts } = company;

        setAdmin(admin);
        setCities(cities);
        setContacts(contacts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCompanyData();
  }, []);

  const value = {
    cities,
    admin,
    contacts,
  };

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};
