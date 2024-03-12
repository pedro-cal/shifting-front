import * as Form from '@radix-ui/react-form'
import { motion } from 'framer-motion'
import { useEffect, useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import InputField from "./InputField"

type SelectedCountry = {
  name?: string,
  format?: string,
}


export default function ContactForm() {
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
  const [firstNameIsValid, setFirstNameIsValid] =useState(false)
  const [lastNameIsValid, setLastNameIsValid] =useState(false)
  //const [emailIsValid, setEmailIsValid] =useState(false)
  //const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false)
  const [phoneNumberLengthIsValid, setPhoneNumberLengthIsValid] = useState(false)
  const [patternIsValid, setPatternIsValid] = useState(true)
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  //const [formSubmitted, setFormSubmitted] = useState(false)

  function handleSubmit() {
    console.log(phoneNumber)
    if(firstName === ''){
      setFirstNameIsValid(false)
      setButtonIsDisabled(true)
    }else{
      setFirstNameIsValid(true)
      setButtonIsDisabled(false)
    }

    if(lastName === ''){
      setLastNameIsValid(false)
      setButtonIsDisabled(true)
    }else{
      setLastNameIsValid(true)
      setButtonIsDisabled(false)
    }

    if(patternIsValid === false || email === ''){
      //setEmailIsValid(false)
      setButtonIsDisabled(true)
    }else{
      //setEmailIsValid(true)
      setButtonIsDisabled(false)
    }

    if(phoneNumberLengthIsValid === false){
      //setPhoneNumberIsValid(false)
      setButtonIsDisabled(true)
    }else{
      //setPhoneNumberIsValid(true)
      setButtonIsDisabled(false)
    }

    if(firstNameIsValid && lastNameIsValid && patternIsValid && phoneNumberLengthIsValid){
      const addNewContact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      }
      const contactListUpdated = [...contactList, addNewContact]
      setContactList(contactListUpdated)
      setSuccessMessage(true)
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhoneNumber("")
      setFirstNameIsValid(false)
      setLastNameIsValid(false)
      setPatternIsValid(false)
      setPhoneNumberLengthIsValid(false)

      //Sending Form data through Klaivyo API:
      const http = require('https');

      const options = {
        method: 'POST',
        hostname: 'a.klaviyo.com',
        port: null,
        path: '/client/subscriptions/?company_id=SLfmGf',
        headers: {
          revision: '2024-02-15',
          'content-type': 'application/json'
        }
      };

      const req = http.request(options, function (res:any) {
        const chunks:any = [];

        res.on('data', function (chunk:any) {
          chunks.push(chunk);
        });

        res.on('end', function () {
          const body = Buffer.concat(chunks);
          console.log(body.toString());
        });
      });

      req.write(JSON.stringify({
        data: {
          type: 'subscription',
          attributes: {
            custom_source: 'Homepage footer signup form',
            profile: {
              data: {
                type: 'profile',
                attributes: {
                  first_name: firstName,
                  last_name: lastName,
                  email: email,
                  phone_number: '+' + phoneNumber,
                  properties: {newKey: 'New Value'}
                },
                meta: {
                  patch_properties: {append: {newKey: 'New Value'}, unappend: {newKey: 'New Value'}, unset: 'skus'}
                }
              }
            }
          },
          relationships: {list: {data: {type: 'list', id: 'SsmFwf'}}}
        }
      }));
      req.end();

    }else{setButtonIsDisabled(true)}

  }

  useEffect(() => {
    if(firstNameIsValid && lastNameIsValid && patternIsValid && phoneNumberLengthIsValid){
      setButtonIsDisabled(false)
    }
  }, [firstNameIsValid, lastNameIsValid, patternIsValid, phoneNumberLengthIsValid])

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setPatternIsValid(emailPattern.test(email))
  }, [email])

  // console.log("ContactList: ")
  // console.log(contactList)

  
    


  return (
    <>
      <motion.section 
      initial={{x: 200}}
      whileInView={{x: 0}}
      transition={{duration: 1.25}}
      className="flex h-screen w-screen overflow-hidden flex-col content-center items-center bg-stone-950 md:flex-row-reverse">
        <div className="my-8 flex items-center justify-center md:w-1/2">
          <p className="mt-[20%] md:mt-0 flex w-3/4 text-center text-xl text-stone-50 md:w-1/2 md:text-2xl lg:text-3xl">
            Do you want a personalized solution for your business? Fill out our form now and our team will contact you.
          </p>
        </div>
        <div className="flex flex-col content-center items-center md:w-1/2">
          <Form.Root className="w-full lg:w-[70%] bg-transparent md:p-10 rounded-lg">
            <Form.Field className="relative flex flex-col content-center items-center" name="fname">
              <Form.Submit className='peer/button absolute bottom-[-6vh] lg:bottom-[-8.5vh] mt-[3vh] md:mt-[5vh] box-border w-full lg:w-2/3 disabled:bg-stone-400 disabled:opacity-40 bg-sky-700 text-sky-50 shadow-sky-950 hover:bg-sky-600 hover:text-black hover:disabled:text-sky-50 flex h-[35px] items-center justify-center rounded-lg px-[15px] font-medium leading-none' asChild>
                <button 
                  disabled={buttonIsDisabled}
                  type="button" 
                  onClick={handleSubmit}
                  >
                  Submit
                </button>
              </Form.Submit>
              <Form.Label className="text-[15px] w-full font-medium leading-[35px] text-white">
                First Name
              </Form.Label>
              <InputField
                className="mb-1 box-border w-full bg-stone-900 inline-flex h-[35px] items-center justify-center rounded-lg px-[10px] leading-none text-stone-50 placeholder:text-base placeholder:text-stone-700 outline outline-[1px] outline-stone-400 peer/fname peer-disabled/button:outline-red-700 peer-disabled/button:valid:outline-stone-400 hover:outline-[2px] focus:outline-[2px]"
                type = "text"
                name = "fname"
                placeHolder="First Name"
                value={firstName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setFirstName(event.target.value)
                  if(firstName !== ''){
                    setFirstNameIsValid(true)
                  }
                }}
              />
              <Form.Message 
                className="peer-enabled/button:hidden peer-valid/fname:hidden text-[13px] w-full text-end pt-2 text-red-400 opacity-[0.8]">
                Please enter your First Name
              </Form.Message>
              <Form.Label className="text-[15px] w-full font-medium leading-[35px] text-white">
                Last Name
              </Form.Label>
              <InputField
                className="mb-1 box-border w-full bg-stone-900 inline-flex h-[35px] items-center justify-center rounded-lg px-[10px] leading-none text-stone-50 placeholder:text-base placeholder:text-stone-700 outline outline-[1px] outline-stone-400 peer/lname peer-disabled/button:outline-red-700 peer-disabled/button:valid:outline-stone-400 hover:outline-[2px] focus:outline-[2px]"
                type = "text"
                name = "lname"
                placeHolder="Last Name"
                value={lastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setLastName(event.target.value)
                  if(lastName !== ''){
                    setLastNameIsValid(true)
                  }
                }}
              />
              <Form.Message 
                className="peer-enabled/button:hidden peer-valid/lname:hidden text-[13px] w-full text-end pt-2 text-red-400 opacity-[0.8]">
                Please enter your Last Name
              </Form.Message>
              <Form.Label className="text-[15px] w-full font-medium leading-[35px] text-white">
                Email
              </Form.Label>
              <InputField
                className="mb-1 box-border w-full bg-stone-900 inline-flex h-[35px] items-center justify-center rounded-lg px-[10px] leading-none text-stone-50 placeholder:text-base placeholder:text-stone-700 outline outline-[1px] outline-stone-400 peer/email peer-disabled/button:outline-red-700 peer-disabled/button:valid:outline-stone-400 hover:outline-[2px] focus:outline-[2px]"
                type = "email"
                name = "email"
                placeHolder="Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value);
                  console.log('pattern',patternIsValid)
                }}
              />
              <Form.Message 
                className="peer-enabled/button:hidden peer-valid/email:hidden text-[13px] w-full text-end pt-2 text-red-400 opacity-[0.8]">
                Please enter a valid Email
              </Form.Message>
              <Form.Label className="text-[15px] w-full font-medium leading-[35px] text-white">
                Phone Number
              </Form.Label>
              <PhoneInput
                containerClass="box-border w-full bg-stone-900 inline-flex h-[35px] rounded-lg text-[15px] leading-none text-stone-50 placeholder:text-stone-700 outline outline-[1px] outline-stone-400 peer/phone peer-disabled/button:outline-red-700 peer-disabled/button:valid:outline-stone-400 hover:outline-[2px] focus:outline-[2px]"
                inputClass="box-border w-full bg-stone-900 shadow-transparent inline-flex h-[35px] items-center justify-center px-[10px] text-[15px] leading-none text-stone-50 placeholder:text-stone-700 outline outline-[1px] outline-stone-400 invalid:outline-red-700 hover:outline-[2px] focus:outline-[2px]"
                dropdownStyle={{backgroundColor: '#0c0a09', color: '#57534e'}}
                buttonStyle={{marginLeft: '0px',backgroundColor: '#1c1917', border: 'solid 2px transparent', borderRadius: '0.5rem'}}
                buttonClass='hover:bg-stone-900 focus:bg-stone-900'
                inputStyle={{backgroundColor: '#1c1917', color: '#fafaf9', width: '100%', height: '100%', border: 'solid 2px transparent', borderRadius: '0.5rem'}}
                country="us"
                placeholder='Phone Number'
                value={phoneNumber}
                isValid={(value, country: SelectedCountry, countries) => {
                  const countryData: SelectedCountry | undefined = countries.find((target: SelectedCountry)=> target.name === country.name);
                  const countryFormat = countryData?.format;
                  const testRegex = /[.]/g;
                  const countryLength = countryFormat?.match(testRegex);
                  if(value.length === countryLength?.length){
                    setPhoneNumberLengthIsValid(true);
                    return true
                  }
                  setPhoneNumberLengthIsValid(false)
                  return false;
                }}
                onChange={(phoneNumber) => {
                  setPhoneNumber(phoneNumber)
                  console.log('check', buttonIsDisabled)
                  console.log('fname', firstNameIsValid)
                  console.log('lname', lastNameIsValid)
                  console.log('email', patternIsValid)
                  console.log('phone', phoneNumberLengthIsValid)
                }}
              />
              <Form.Message 
                className="peer-enabled/button:hidden peer-valid/phone:hidden text-[13px] w-full text-end pt-2 text-red-400 opacity-[0.8]">
                Please enter a valid Phone Number
              </Form.Message>
            </Form.Field>
          </Form.Root>
          {successMessage ? (
            <div className="flex items-center justify-center outline outline-1 outline-green-400 text-[15px] w-full md:w-[75%] lg:w-[50%] text-center p-4 md:px-8 xl:px-2 mt-[9vh] md:mt-[5vh] lg:mt-[8vh] text-green-400 opacity-[0.8]">
              Your message has been successfully sent
            </div>
          ):null}
        </div>
      </motion.section>
    </>
  )
}
