class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.validateName(firstName, "First Name");
        this.validateName(lastName, "Last Name");
        this.validateAddress(address, "Address");
        this.validateAddress(city, "City");
        this.validateAddress(state, "State");
        this.validateZip(zip);
        this.validatePhone(phone);
        this.validateEmail(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    validateName(name, fieldName) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, min 3 chars
        if (!namePattern.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
    }

    validateAddress(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
    }

    validateZip(zip) {
        const zipPattern = /^\d{6}$/; // 6-digit Zip Code
        if (!zipPattern.test(zip)) {
            throw new Error("Zip code must be a 6-digit number.");
        }
    }

    validatePhone(phone) {
        const phonePattern = /^[6-9]\d{9}$/; // Indian 10-digit format starting with 6-9
        if (!phonePattern.test(phone)) {
            throw new Error("Phone number must be a valid 10-digit number starting with 6-9.");
        }
    }

    validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            throw new Error("Invalid email format.");
        }
    }

}

module.exports = Contact;