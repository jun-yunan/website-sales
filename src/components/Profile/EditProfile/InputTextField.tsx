import { FunctionComponent } from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface InputTextFieldProps {
    name: string;
    control: any;
    label: string;
    valueInput: any;
    register: any;
}

const InputTextField: FunctionComponent<InputTextFieldProps> = ({
    name,
    control,
    label,
    valueInput,
    register,
}) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        required
                        id="standard-required"
                        label={label}
                        variant="standard"
                        value={valueInput}
                        {...register(name)}
                    />
                )}
            />
        </>
    );
};

export default InputTextField;
