import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    TextField,
    InputAdornment,
    Button,
    Stack,
    Alert,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { editUser, updateUser } from '../API/userRequest';



function EditUser() {
    const { register, handleSubmit, setValue, reset } = useForm();
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo(id);
    }, []);

    const getUserInfo = async (id) => {
        const response = await editUser(id);
        if (response.data.success === true) {
            Object.keys(response.data.user).forEach((key) => {
                setValue(key.toString(), response.data.user[key]);
            });
        } else {
            console.error("Error fetching users");
        }
    };

    const updateUserSubmit = async (data) => {
        console.log(data);
        const response = await updateUser(id, data);
        console.log(response);
        if (response.data.success === true) {
            reset();
            navigate("/"); // Navigate to the Userlists component
        } else {
            alert(response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(updateUserSubmit)}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='name'
                    inputProps={register('name')}
                    id="input-with-icon-textfield"
                    label="Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='email'
                    inputProps={register('email')}
                    id="input-with-icon-textfield"
                    label="Email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='mobile'
                    inputProps={register('mobile')}
                    id="input-with-icon-textfield"
                    label="Mobile"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='age'
                    inputProps={register('age')}
                    id="input-with-icon-textfield"
                    label="Age"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='work'
                    inputProps={register('work')}
                    id="input-with-icon-textfield"
                    label="Work"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='add'
                    inputProps={register('add')}
                    id="input-with-icon-textfield"
                    label="Address"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <TextField
                    name='desc'
                    inputProps={register('desc')}
                    id="input-with-icon-textfield"
                    label="Description"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
            </Box>
            <Stack spacing={2} direction="row">
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </Stack>
        </form>

    );
}
export default EditUser