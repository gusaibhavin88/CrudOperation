import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteUserApi, editUser, getAllUsers } from '../API/userRequest';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from './myContext';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function Userlists() {
    const navigate = useNavigate()
    const { rows, setRows } = useMyContext();


    const getAllUserList = async () => {
        const response = await getAllUsers();
        if (response.data.success === true) {
            setRows(response.data.users); // Update the state with fetched user data
        } else {
            alert("Error fetching users");
        }
    };


    const deleUser = async (id) => {
        const response = await deleteUserApi(id.toString());

        if (response.data.success === true) {
            const updatedRow = rows.filter((item) => item._id !== id)
            setRows(updatedRow)
        } else {
            console.log(response.data.message);
        }
    }
    const onEditClick = async (id) => {
        const response = await editUser(id.toString());


        if (response.data.success === true) {
            navigate(`/edit/${id}`)
        } else {
            alert(response.data.message);
        }
    }

    useEffect(() => {
        getAllUserList();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="right">Address</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Mobile No</StyledTableCell>
                        <StyledTableCell align="right">Work</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                            <StyledTableCell align="right">{row.add}</StyledTableCell>
                            <StyledTableCell align="right">{row.age}</StyledTableCell>
                            <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                            <StyledTableCell align="right">{row.work}</StyledTableCell>
                            <StyledTableCell align="right">{row.desc}</StyledTableCell>
                            <StyledTableCell align="right" ><DeleteIcon onClick={() => deleUser(row._id)} /></StyledTableCell>
                            <StyledTableCell align="right"><EditIcon onClick={() => onEditClick(row._id)} /></StyledTableCell>
                        </StyledTableRow>
                    )) : <span>No data Found</span>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Userlists