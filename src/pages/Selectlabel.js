import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{m : "0 14px 0 14px", p: 0, minWidth: "252px", minHeight:"84px"}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{minHeight:"84px"}}
        >
          <MenuItem value="">
            <em>책 제목</em>
          </MenuItem>
          <MenuItem value={10}>단과대학</MenuItem>
          <MenuItem value={20}>교수</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}