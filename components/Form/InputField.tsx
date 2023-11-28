import * as Form from '@radix-ui/react-form'

interface ContactData {
    className: string
    type: string
    name: string
    placeHolder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

}

function InputField(props: ContactData) {
    
    const {className, type, name, placeHolder, value, onChange} = props
    
    return(
        
        <Form.Control asChild>
            <input
                className={className}
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