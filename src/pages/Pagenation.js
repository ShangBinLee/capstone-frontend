import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagenation=()=>{
    return (
        <Stack spacing={2}>
            <Pagination count={10} shape="rounded" /> // count 안 조절 필요
        </Stack>
    )
}

export default Pagenation