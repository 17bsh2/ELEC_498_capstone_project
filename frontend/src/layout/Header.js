import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PollIcon from '@mui/icons-material/Poll';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Header = ({ onSidebarMobileOpen }) => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <AppBar
                elevation={5}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white
                }}
            >
                <Toolbar sx={{ minHeight: 70 }}>
                    <IconButton
                        color='inherit'
                        onClick={onSidebarMobileOpen}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon fontSize='medium' />
                    </IconButton>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                            <IconButton size='large' disabled>
                                <LocalHospitalIcon 
                                    style={{ 
                                        color: theme.palette.common.white, 
                                        height: 30, 
                                        width: 30 
                                    }} 
                                />
                                <Typography 
                                    component='h1'
                                    variant='h3' 
                                    sx={{ 
                                        flexGrow: 1,
                                        color: theme.palette.common.white,
                                        fontWeight: 'bold',
                                        textDecoration: 'none',
                                        marginLeft: '10px'
                                    }}
                                >
                                    Ovarian Cancer Risk Prediction
                                </Typography>
                            </IconButton>
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                        <Button
                            component='a'
                            color='primary'
                            href='/'
                            size='small'
                            variant='text'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <HomeOutlinedIcon /> Home
                        </Button>
                        <Button
                            component='a'
                            color='primary'
                            href='/classifier'
                            size='small'
                            variant='text'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <PollIcon 
                                style={{ height: 23, width: 23 }} 
                            /> Survey
                        </Button>
                        <Button
                            component='a'
                            color='primary'
                            href='/calendar'
                            size='small'
                            variant='text'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <PollIcon 
                                style={{ height: 23, width: 23 }} 
                            /> Calendar
                        </Button>

                        <Button
                            component='a'
                            color='primary'
                            href='/nutrition'
                            size='small'
                            variant='text'
                            sx={{
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: 'medium',
                                mr: 2,
                                '& svg': {
                                    mr: 0.5
                                },
                            }}
                        >
                            <PollIcon 
                                style={{ height: 23, width: 23 }} 
                            /> Nutrition
                        </Button>
                    </Toolbar>
                <Divider />
            </AppBar>
        </React.Fragment>
    );
};

export default Header;