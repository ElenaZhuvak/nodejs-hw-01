import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    contacts.push(createFakeContact());
    await writeContacts(contacts);
};

addOneContact();
