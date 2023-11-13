import { useState } from "react"


export default function Form() {
    
    const contacts = [{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    }];

    const [contactList, setContactList] = useState([...contacts]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] =useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleSubmit(){
        const addNewContact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
        };
        const contactListUpdated = [...contactList, addNewContact];
        console.log(contactListUpdated);
        setContactList(contactListUpdated);
    }
    console.log(contactList);

    return(
        <>
            <section className="bg-stone-950 h-screen flex flex-col md:flex-row-reverse items-center content-center">
                <div className="flex items-center justify-center md:w-1/2 my-8">
                    <p className="flex w-3/4 md:w-1/2 text-stone-50 text-xl md:text-2xl lg:text-3xl text-center">Do you want a personalized solution for your business? Fill out our form now and our team will contact you.</p>
                </div>
                <div className="flex md:w-1/2 flex-col items-center content-center">
                    <fieldset className="flex md:w-3/4 2xl:w-1/2 flex-col px-6 pb-4 pt-3 text-stone-50">
                        <label>First Name:
                            <input autoComplete="off" type="text" name="fname" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="flex w-full mb-2 px-2 text-stone-900 rounded-full"/>
                        </label>
                        <label>Last Name:
                            <input autoComplete="off" type="text" name="lname" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} className="flex w-full mb-2 px-2 text-stone-900 rounded-full"/>
                        </label>
                        <label>Email:
                            <input autoComplete="off" type="text" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className="flex w-full mb-2 px-2 text-stone-900 rounded-full"/>
                        </label>
                        <label>Phone Number:
                            <input autoComplete="off" type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} className="flex w-full mb-2 px-2 text-stone-900 rounded-full"/>
                        </label>
                    </fieldset>
                    <button onClick={handleSubmit} className="flex items-center justify-center h-2 lg:h-4 2xl:h-10 lg:w-1/2 mt-2 p-4 lg:p-6 bg-stone-300 hover:bg-stone-500 text-stone-900 hover:text-stone-50 lg:text-2xl 2xl:text-4xl rounded-full">Send Information</button>
                </div>
            </section>
            
        </>
    )
}