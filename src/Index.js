const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Avinash", "Kumar", "Bhopal", "India", "In", "100001", "9696439931", "avinashkumarrai8577@gmail.com"
    );
    console.log(addressBook.addContact(contact1));
    const contact2 = new Contact(
        "Ayushi", "Rai", "Bhopal", "India","In","1000000","9197979988","ayushirai@gmail.com"
    );
    console.log(addressBook.addContact(contact2)); 
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const invalidContact = new Contact(
        "an", "son", "abc", "In", "I", "100A01", "12345", "invalid-email"
    );
    console.log(addressBook.addContact(invalidContact));
} catch (error) {
    console.error("Error:", error.message);
}