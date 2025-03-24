import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    for (let i = 0; i < number; i++) {
        contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

generateContacts(5);
