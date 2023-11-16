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
                className="mb-2 p-2 flex w-full rounded-lg bg-stone-900 placeholder:text-base placeholder:text-stone-700 text-stone-50 border-solid border-2 border-stone-400 focus:ring-2 focus:ring-stone-500"
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