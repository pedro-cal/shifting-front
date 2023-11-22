import * as Form from '@radix-ui/react-form'

interface ContactData {
    type: string;
    name: string;
    placeHolder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField(props: ContactData) {
    
    const {type, name, placeHolder, value, onChange} = props;
    
    return(
        
        <Form.Control asChild>
            <input
                //className="mb-2 p-2 flex w-full rounded-lg bg-stone-900 placeholder:text-base placeholder:text-stone-700 text-stone-50 border-solid border-2 border-stone-400 focus:ring-0 focus:ring-transparent"
                className="box-border w-full bg-stone-900 shadow-stone-400 inline-flex h-[35px] items-center justify-center rounded-lg px-[10px] leading-none text-stone-50 placeholder:text-base placeholder:text-stone-700 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_2px_#a8a29e] focus:shadow-[0_0_0_2px_#a8a29e] selection:text-stone-50 selection:bg-stone-950"
                required
                autoComplete="off"
                type={type}
                name={name}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </Form.Control>
    )
}

export default InputField