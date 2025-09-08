import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  location: string;
  phone: string;
  avatar: string;
}

interface ContactsProps {
  contacts?: Contact[];
  onViewProfile?: (contactId: string) => void;
}

const defaultContacts: Contact[] = [
  {
    id: '1',
    name: 'Anna M. Hines',
    location: 'Burr Ridge/Illinois',
    phone: '(+1)-555-1564-261',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Candice F. Gilmore',
    location: 'Roselle/Illinois',
    phone: '(+257)-755-5532-588',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Vanessa R. Davis',
    location: 'Wann/Oklahoma',
    phone: '(+1)-441-5558-183',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Judith H. Fritsche',
    location: 'SULLIVAN/Kentucky',
    phone: '(+157)-305-5579-759',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '5',
    name: 'Peter T. Smith',
    location: 'Yreka/California',
    phone: '(+1)-555-0123-456',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '6',
    name: 'Emmanuel J. Delcid',
    location: 'Atlanta/Georgia',
    phone: '(+1)-555-0987-654',
    avatar:
      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '7',
    name: 'William J. Cook',
    location: 'Rosenberg/Texas',
    phone: '(+1)-555-0246-813',
    avatar:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: '8',
    name: 'Martin R. Peters',
    location: 'Youngstown/Ohio',
    phone: '(+1)-555-0135-792',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  },
];

const ContactCard: React.FC<{ contact: Contact; onViewProfile?: (contactId: string) => void }> = ({
  contact,
  onViewProfile,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center space-y-4 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
      <div className="relative">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-gray-900 dark:text-white font-medium text-lg">{contact.name}</h3>

        <div className="flex items-center justify-center space-x-1 text-red-600 dark:text-red-400 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{contact.location}</span>
        </div>

        <div className="flex items-center justify-center space-x-1 text-green-600 dark:text-green-400 text-sm">
          <Phone className="w-4 h-4" />
          <span>{contact.phone}</span>
        </div>
      </div>

      <button
        onClick={() => onViewProfile?.(contact.id)}
        className="px-6 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-colors duration-200 text-sm font-medium"
      >
        View Profile
      </button>
    </div>
  );
};

const Contacts: React.FC<ContactsProps> = ({ contacts = defaultContacts, onViewProfile }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Contacts</h1>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <span>Apps</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900 dark:text-white">Contacts</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onViewProfile={onViewProfile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
