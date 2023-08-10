import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddUser() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: 'center', marginTop: "20px" }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <span style={{ fontWeight: "bold", alignSelf: "center", fontSize: "20px" }}>Add User</span>
                <br />
                <br />
                <TextField label="Name" color="secondary" focused />
                <br />
                <TextField label="Email" color="secondary" focused />

                <br />
                <TextField label="Mobile" color="secondary" focused />

                <br />
                <TextField label="Age" color="secondary" focused />

                <br />
                <TextField label="Work" color="secondary" focused />
                <br />
                <TextField label="Address" color="secondary" focused />
                <br />
                <TextField label="Description" color="secondary" focused />
                <br />
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Submit</Button>
                </Stack>

            </Box>
        </div>

    );
}

export default AddUser