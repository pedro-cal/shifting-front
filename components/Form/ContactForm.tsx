import * as Form from '@radix-ui/react-form'
import { useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
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
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(true);
  const [patternIsValid, setPatternIsValid] = useState(true)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let counter = 4;
  
  function handleSubmit() {
    if(patternIsValid === true){
      console.log(email+' is a Valid Email')
    }else{console.log(email+' is a Invalid Email')}

    if(firstName === ''){
      setFirstNameIsValid(false)
      counter -= 1
    }else{setFirstNameIsValid(true)}

    if(lastName === ''){
      setLastNameIsValid(false)
      counter -= 1
    }else{setLastNameIsValid(true)}

    if(patternIsValid === false){
      setEmailIsValid(false)
      counter -= 1
    }else{setEmailIsValid(true)}
    console.log(emailIsValid)

    if(phoneNumber === '' || phoneNumber.length < 7){
      setPhoneNumberIsValid(false)
      counter -= 1
    }else{setPhoneNumberIsValid(true)}

    if(counter === 4){
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
      setFirstNameIsValid(true);
      setLastNameIsValid(true);
      setEmailIsValid(true);
      setPhoneNumberIsValid(true);
    }
    
    console.log(counter)
    console.log("ContactList: ")
    console.log(contactList)
  }
    
  console.log("ContactList: ")
  console.log(contactList)
  

  return (
    <>
      <section className="flex h-screen w-screen overflow-hidden flex-col content-center items-center bg-stone-950 md:flex-row-reverse">
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
              {firstNameIsValid === false ? (
                <div className="text-[13px] text-end pt-2 text-white opacity-[0.8]">
                  Please enter your First Name
                </div>
              ):null}
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
              {lastNameIsValid === false ? (
                <div className="text-[13px] text-end pt-2 text-white opacity-[0.8]">
                  Please enter your Last Name
                </div>
              ):null}
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="email">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                  Email
                </Form.Label>
              </div>
              <InputField
                type = "text"
                name = "email"
                placeHolder="Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                  setPatternIsValid(emailPattern.test(email))
                }}
              />
              {emailIsValid === false ? (
                <div className="text-[13px] text-end pt-2 text-white opacity-[0.8]">
                  Please enter a valid Email
                </div>
              ):null}
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="phoneNumber">
              <div className="flex items-baseline justify-between">
                <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
                  Phone Number
                </Form.Label>
              </div>
              <PhoneInput
                containerClass="box-border w-full bg-stone-900 shadow-stone-400 inline-flex h-[35px] rounded-lg text-[15px] leading-none text-stone-50 placeholder:text-stone-700 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_2px_#a8a29e] focus:shadow-[0_0_0_2px_#a8a29e] selection:text-stone-50 selection:bg-stone-950"
                inputClass="box-border w-full bg-stone-900 shadow-transparent inline-flex h-[35px] items-center justify-center px-[10px] text-[15px] leading-none text-stone-50 placeholder:text-stone-700 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_2px_#a8a29e] focus:shadow-[0_0_0_2px_#a8a29e] selection:text-stone-50 selection:bg-stone-950"
                dropdownStyle={{backgroundColor: '#0c0a09', color: '#57534e'}}
                buttonStyle={{marginLeft: '0px',backgroundColor: '#1c1917', border: 'solid 2px transparent', borderRadius: '0.5rem'}}
                buttonClass='hover:bg-stone-900 focus:bg-stone-900'
                inputStyle={{backgroundColor: '#1c1917', color: '#fafaf9', width: '100%', height: '100%', border: 'solid 2px transparent', borderRadius: '0.5rem'}}
                country="us"
                placeholder='Phone Number'
                value={phoneNumber}
                onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
              />
              {phoneNumberIsValid === false ? (
                <div className="text-[13px] text-end pt-2 text-white opacity-[0.8]">
                  Please enter a valid Phone Number
                </div>
              ):null}
            </Form.Field>
            <Form.Submit asChild>
              <div className='w-full flex items-center justify-center'>
                <button onClick={handleSubmit} className="box-border w-full lg:w-2/3 bg-sky-700 text-sky-50 shadow-sky-950 hover:bg-sky-600 hover:text-black flex h-[35px] items-center justify-center rounded-lg px-[15px] font-medium leading-none shadow-[0_2px_5px] focus:shadow-[0_0_0_2px] focus:outline-none mt-[20px]">
                  Submit
                </button>
              </div>
            </Form.Submit>
          </Form.Root>
          {/* <button onClick={handleSubmit} className="box-border w-full lg:w-2/3 bg-sky-700 text-sky-50 shadow-sky-950 hover:bg-sky-600 hover:text-black flex h-[35px] items-center justify-center rounded-lg px-[15px] font-medium leading-none shadow-[0_2px_5px] focus:shadow-[0_0_0_2px] focus:outline-none mt-[20px]">
            Submit
          </button> */}
        </div>
      </section>
    </>
  )
}
