import { createContext, useState, useEffect } from 'react';
import { db } from '../utils/firebase/firebase.utils';
import { doc, getDoc } from 'firebase/firestore';

export const CompanyContext = createContext({
  admin: {},
  cities: [],
  contacts: [],
  faq: [],
});

export const CompanyProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});
  const [cities, setCities] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const docRef = doc(db, 'company', 'companyData');
        const docSnap = await getDoc(docRef);

        const company = docSnap.data();

        const { admin, cities, contacts, faq } = company;

        setAdmin(admin);
        setCities(cities);
        setContacts(contacts);
        setFaq(faq);
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
    faq,
  };

  return (
    <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>
  );
};
