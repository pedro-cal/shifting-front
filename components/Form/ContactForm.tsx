import * as Form from '@radix-ui/react-form'
import { useState } from "react"
import InputField from "./InputField"

export default function ContactForm() {
  const contacts = [
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  ]

  const [contactList, setContactList] = useState([...contacts]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit() {
    const addNewContact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    }
    const contactListUpdated = [...contactList, addNewContact]
    setContactList(contactListUpdated)
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  }
  console.log("ContactList: ")
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
          <Form.Root className="w-full lg:w-[70%] bg-transparent md:p-10 rounded-lg">
            <Form.Field className="grid mb-[10px]" name="fname">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                  First Name
                </Form.Label>
              </div>
              <InputField
                type = "text"
                name = "fname"
                placeHolder="First Name"
                value={firstName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
              />
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="lname">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                  Last Name
                </Form.Label>
              </div>
              <InputField
                type = "text"
                name = "lname"
                placeHolder="Last Name"
                value={lastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
              />
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                  Email
                </Form.Label>
                <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                  Please provide a valid Email
                </Form.Message>
              </div>
              <InputField
                type = "text"
                name = "email"
                placeHolder="Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              />
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="phoneNumber">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                  Phone Number
                </Form.Label>
              </div>
              <InputField
                type = "text"
                name = "phoneNumber"
                placeHolder="Phone Number"
                value={phoneNumber}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)}
              />
              <Form.Message className="text-[13px] text-center md:text-right text-white opacity-[0.8]" match="valueMissing">
                Please enter your Phone Number
              </Form.Message>
              <Form.Message className="text-[13px] text-center md:text-right text-white opacity-[0.8]" match="typeMismatch">
                Please provide a valid Phone Number
              </Form.Message>
            </Form.Field>
            <Form.Submit asChild>
                <div className='w-full flex items-center justify-center'>
                  <button onClick={handleSubmit} className="box-border w-full lg:w-2/3 bg-sky-700 text-sky-50 shadow-sky-950 hover:bg-sky-600 hover:text-black flex h-[35px] items-center justify-center rounded-lg px-[15px] font-medium leading-none shadow-[0_2px_5px] focus:shadow-[0_0_0_2px] focus:outline-none mt-[20px]">
                    Submit
                  </button>
                </div>
            </Form.Submit>
          </Form.Root>
        </div>
      </section>
    </>
  )
}
