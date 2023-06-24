import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBaseball,
    faFilm,
    faGamepad,
    faMusic,
    faPencil,
    faPlane,
    faPodcast,
} from '@fortawesome/free-solid-svg-icons';

export default function SelectVariants({
    register,
    interests,
}: {
    register: any;
    interests: string;
}) {
    const [age, setAge] = React.useState(interests);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label">Sở thích</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    {...register('interests')}
                    onChange={handleChange}
                    label="Sở thích"
                    sx={{ overflow: 'auto' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="music">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faMusic} className="mr-2" />
                            <p>Nghe nhạc</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="draw">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPencil} className="mr-2" />
                            <p>Vẽ</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="podcast">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPodcast} className="mr-2" />
                            <p>Nghe Podcast</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="game">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
                            <p>Chơi game</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="movie">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faFilm} className="mr-2" />
                            <p>Xem phim</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="sport">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faBaseball} className="mr-2" />
                            <p>Chơi thể thao</p>
                        </div>
                    </MenuItem>
                    <MenuItem value="travel">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPlane} className="mr-2" />
                            <p>Du lịch</p>
                        </div>
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
