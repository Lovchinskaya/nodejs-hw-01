import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";



export const removeLastContact = async () => {
    try{
       const contacts = await readContacts();
    //    const removeLast = contacts[contacts.length - 1];
       const newContacts = contacts.slice(0, -1);

       await writeContacts(newContacts);


    } catch(error){
        console.log(error);
    }
};

removeLastContact();
