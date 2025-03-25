import { PATH_DB } from "../constants/contacts.js";
import * as fs from 'node:fs/promises';
import { readContacts } from "../utils/readContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

removeLastContact();
