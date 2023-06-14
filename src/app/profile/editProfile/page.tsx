'use client';

import { FunctionComponent } from 'react';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import SelectAutoWidth from '@/components/Profile/SelectAutoWidth';
import CountrySelect from '@/components/Profile/CountrySelect';

interface EditInfoUserProps {}

const EditInfoUser: FunctionComponent<EditInfoUserProps> = () => {
    return (
        <div className="fixed w-full z-20 h-full translate-y-[-32px] flex flex-col items-center justify-center bg-[#444] bg-opacity-40">
            <div className="relative w-[40%] h-[80%] bg-white translate-y-[-32px] rounded-xl shadow-xl px-6 overflow-auto">
                <Link
                    href={'/profile'}
                    className="absolute top-[2%] right-[2%] text-4xl hover:bg-slate-200 py-2 px-4 rounded-full transition-all duration-500 ease-in-out"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </Link>
                <h2 className="w-full text-xl my-6">Edit Info</h2>
                <div className="w-full border-b-2 border-y-slate-600"></div>
                <div className="mt-6 flex flex-col w-full">
                    <h2 className="text-2xl font-semibold">Basic info</h2>

                    <div className="min-h-[350px] flex flex-col justify-between mt-4 text-base font-semibold">
                        <TextField
                            required
                            id="standard-required"
                            label="First Name"
                            defaultValue="Nguyen Anh"
                            variant="standard"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Last Name"
                            defaultValue="Kiet"
                            variant="standard"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="BirthDay"
                            type="date"
                            // defaultValue="20/04/2003"
                            value={'2003-05-24'}
                            variant="standard"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            required
                            id="standard-required"
                            label="Address"
                            defaultValue="Ho Chi Minh City, Viet Nam"
                            variant="standard"
                            sx={{ width: '100%' }}
                        />
                        <SelectAutoWidth />
                        <div className="flex items-center">
                            <CountrySelect />
                            <TextField
                                required
                                id="standard-required"
                                label="Number Phone"
                                defaultValue="0763999584"
                                variant="standard"
                                sx={{ marginLeft: 5 }}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn-light mt-6">Save</button>
            </div>
        </div>
    );
};

export default EditInfoUser;
