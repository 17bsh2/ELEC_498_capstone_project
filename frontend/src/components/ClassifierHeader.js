import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { TextField, createTheme } from '@mui/material';
import { Input, ariaLabel } from '@mui/material';
//import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const ClassifierHeader = () => {
const theme = createTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    
    return(
    <Grid item>
            <Typography
                color={theme.palette.text.primary}
                variant='h2'
            >
                Survey
            </Typography>
            <Box paddingTop={2}>
                <Typography
                    color={theme.palette.text.secondary}
                    variant='h5'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
            </Box>
            
            Most Relevant (24 features): 


            <Box padding={2}>
            <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
            <TextField id="fh_cancer" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="ovarsumm_fh_cnt" label="1" variant="standard" />
    </Box>
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="breast_fh" label="1" variant="standard" />
    </Box>
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="ovarsumm_fh" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="breast_fh_cnt" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="breast_fh_age" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="ovarsumm_fh_age" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="benign_ovcyst" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="endometriosis" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="uterine_fib" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="mammo_history" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="papsmear_history" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="pelvic_history" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="usound_history" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="ca125_history" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="bbd" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="ovariesr_f" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="age" label="1" variant="standard" />
    </Box>
        
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="weight_f" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="height_f" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="ovary_trial_flag" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="PAIAPG3M_A" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="PHQ85_A" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
                <TextField id="DIFF_A" label="1" variant="standard" />
    </Box>
        </Grid>
    );
};

export default ClassifierHeader;