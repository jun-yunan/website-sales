import { TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';

interface InputFieldProps {
    name: string;
    label: string;
    form: any;
    type: string;
}

const InputField: FunctionComponent<InputFieldProps> = (props) => {
    const { form, name, label, type } = props;

    const {
        formState: { errors },
    } = form;

    console.log(errors);

    return (
        <>
            <Controller
                control={form.control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        sx={{ width: '100%' }}
                        placeholder={label}
                        onBlur={onBlur}
                        label={label}
                        variant="outlined"
                        error={!!errors[name]}
                        helperText={errors[name]?.message}
                        name={name}
                        type={type}
                        id="outlined-password-input"
                        {...form.register(name)}
                    />
                )}
                name={name}
            />
        </>
    );
};

export default InputField;
