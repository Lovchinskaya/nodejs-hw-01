import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";


export const addOneContact = async () => {
     try {
        const contacts = await readContacts();
        const addContact = createFakeContact();
        const updateDB = [...contacts, addContact];
        await writeContacts(updateDB);
        // console.log(contacts);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };



addOneContact();
