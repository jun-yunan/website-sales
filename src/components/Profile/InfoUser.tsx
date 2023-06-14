import { TextField } from '@mui/material';
import { FunctionComponent } from 'react';
import FieldInfo from './FieldInfo';

interface InfoUserProps {}

const InfoUser: FunctionComponent<InfoUserProps> = () => {
    return (
        <div className="flex flex-col items-center max-w-xl w-[400px]">
            <h2 className="title-sm-dark">Thông tin cơ bản</h2>
            {/* <TextField label="Standard" variant="standard" /> */}
            <FieldInfo label="Email">kiet@gmail.com</FieldInfo>
            <FieldInfo label="Gender">Male</FieldInfo>
            <FieldInfo label="BirthDay">24/05/2003</FieldInfo>
            <FieldInfo label="Address">Ho Chi Minh City, Viet Nam</FieldInfo>
            <FieldInfo label="Number Phone">0763999584</FieldInfo>
        </div>
    );
};

export default InfoUser;
