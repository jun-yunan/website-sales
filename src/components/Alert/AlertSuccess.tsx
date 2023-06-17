import { FunctionComponent } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface AlertSuccessProps {}

const AlertSuccess: FunctionComponent<AlertSuccessProps> = () => {
    return (
        <>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                This is a success alert — <strong>check it out!</strong>
            </Alert>
        </>
    );
};

export default AlertSuccess;
