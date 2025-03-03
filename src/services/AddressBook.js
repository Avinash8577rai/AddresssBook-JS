const Contact = require('../models/Contact');

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        console.log("\nAddress Book Contacts:");
        this.contacts.forEach((contact, index) => console.log(`${index + 1}. ${contact.toString()}`));
    }
}

module.exports = AddressBook;
