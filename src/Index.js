const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

try {
    const contact1 = new Contact(
        "Avinash", "Kumar", "Bhopal", "India", "MadhyaPradesh", "100001", "9696439931", "avinashkumarrai8577@gmail.com"
    );
    console.log(addressBook.addContact(contact1));
    const contact2 = new Contact(
        "Ayush", "Rai", "Bhopal", "India","Chattisgarh","100000","9197979988","ayushirai@gmail.com"
    );
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Rakesh", { address: "Pipariya", city: "New York", phone: "9234567890" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}

