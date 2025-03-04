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
    )
    console.log(addressBook.addContact(contact2)); 
    console.log("All Contacts Before editing", addressBook.getAllContacts());
    console.log(addressBook.editContact("Rakesh", { address: "Pipariya", city: "New York", phone: "9234567890" }));
    console.log("All Contacts After editing", addressBook.getAllContacts());
    console.log(addressBook.deleteContact("Rakesh"));
    console.log("All Contacts After Deleting:", addressBook.getAllContacts());
    console.log("Total Contacts:", addressBook.countContacts()); 

    const duplicateContact = new Contact(
          "Avinash", "Kumar", "Bhopal", "India", "MadhyaPradesh", "100001", "9696439931", "avinashkumarrai8577@gmail.com"
    );
    console.log(addressBook.addContact(duplicateContact));  

    console.log("Contacts in India:");
    console.log(addressBook.searchByCityOrState("India"));

    console.log("Viewing Persons by City or State:");
    console.log(addressBook.viewPersonsByCityOrState());
    
    console.log("Count of Contacts by City and State:");
    console.log(addressBook.countByCityOrState());

    console.log("\nContacts Sorted Alphabetically:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by Name:");
    console.log(addressBook.sortContactsByName().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by City:");
    console.log(addressBook.sortContactsByCity().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by State:");
    console.log(addressBook.sortContactsByState().map(contact => contact.toString()).join("\n"));

    console.log("\nContacts Sorted by Zip:");
    console.log(addressBook.sortContactsByZip().map(contact => contact.toString()).join("\n"));

} catch (error) {
    console.error("Error:", error.message);
}


