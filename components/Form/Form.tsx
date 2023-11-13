import { useState } from "react"

export default function Form() {
  const contacts = [
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  ]

  const [contactList, setContactList] = useState([...contacts])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  function handleSubmit() {
    const addNewContact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    }
    const contactListUpdated = [...contactList, addNewContact]
    console.log(contactListUpdated)
    setContactList(contactListUpdated)
  }
  console.log(contactList)

  return (
    <>
      <section className="flex h-screen flex-col content-center items-center bg-stone-950 md:flex-row-reverse">
        <div className="my-8 flex items-center justify-center md:w-1/2">
          <p className="flex w-3/4 text-center text-xl text-stone-50 md:w-1/2 md:text-2xl lg:text-3xl">
            Do you want a personalized solution for your business? Fill out our form now and our team will contact you.
          </p>
        </div>
        <div className="flex flex-col content-center items-center md:w-1/2">
          <fieldset className="flex flex-col px-6 pb-4 pt-3 text-stone-50 md:w-3/4 2xl:w-1/2">
            <label>
              First Name:
              <input
                autoComplete="off"
                type="text"
                name="fname"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="mb-2 flex w-full rounded-full px-2 text-stone-900"
              />
            </label>
            <label>
              Last Name:
              <input
                autoComplete="off"
                type="text"
                name="lname"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className="mb-2 flex w-full rounded-full px-2 text-stone-900"
              />
            </label>
            <label>
              Email:
              <input
                autoComplete="off"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mb-2 flex w-full rounded-full px-2 text-stone-900"
              />
            </label>
            <label>
              Phone Number:
              <input
                autoComplete="off"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                className="mb-2 flex w-full rounded-full px-2 text-stone-900"
              />
            </label>
          </fieldset>
          <button
            onClick={handleSubmit}
            className="mt-2 flex h-2 items-center justify-center rounded-full bg-stone-300 p-4 text-stone-900 hover:bg-stone-500 hover:text-stone-50 lg:h-4 lg:w-1/2 lg:p-6 lg:text-2xl 2xl:h-10 2xl:text-4xl"
          >
            Send Information
          </button>
        </div>
      </section>
    </>
  )
}
