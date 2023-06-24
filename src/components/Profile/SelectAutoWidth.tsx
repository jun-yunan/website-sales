import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth({ value, register }: { value?: string; register: any }) {
    const [gender, setGender] = React.useState(value);

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ width: '100%' }}>
                <InputLabel required id="demo-simple-select-standard-label">
                    Gender
                </InputLabel>
                <Select
                    {...register('gender')}
                    labelId="demo-simple-select-standard-label"
                    name="gender"
                    id="demo-simple-select-standard"
                    // defaultValue={value}
                    value={gender}
                    onChange={handleChange}
                    label="Gender"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
