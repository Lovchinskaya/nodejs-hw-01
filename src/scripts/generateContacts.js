import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const generatedNewContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const addContacts = [...contacts, ...generatedNewContacts];
    await writeContacts(addContacts);
    // console.log(`${number} contacts`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

generateContacts(3);

