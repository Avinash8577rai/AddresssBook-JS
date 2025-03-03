const Contact = require('./models/Contact');
const AddressBook = require('./services/AddressBook');


const addressBook = new AddressBook();


const contact1 = new Contact("John", "Doe", "123 Street", "New York", "NY", "10001", "1234567890", "john.doe@example.com");

addressBook.addContact(contact1);


addressBook.displayContacts();
