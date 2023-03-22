import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { TextField, createTheme } from '@mui/material';
import { Input, ariaLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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

            <Box padding={2}>
            <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Has any first-degree relative had cancer? 
                    Basal cell skin cancers are not included. 
                    First-degree relatives include parents, full-siblings, and children.
                     Half-siblings are not included. (Yes/No)
                </Typography>
            <TextField id="fh_cancer" label="Yes/No" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Enter the number of first-degree relatives with ovarian, fallopian tube, or peritoneal 
                    cancer. Ovarian summary cancers include ovarian, fallopian tube and peritoneal cancer.
                </Typography>
                <TextField id="ovarsumm_fh_cnt" label="#" variant="standard" />
    </Box>
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Breast cancer family history in first-degree relatives. Includes parents, full-siblings, and children.
                   
                    Indicate EITHER: Yes/No/Male Relative Only/Possibly - Relative or Cancer Type Not Clear
                </Typography>
                <TextField id="breast_fh" label="Yes/No/Male Relative Only/Possibly - Relative or Cancer Type Not Clear" variant="standard" />
    </Box>


    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Ovarian, fallopian tube, or peritoneal cancers family history in first-degree relatives.
                     Includes parents, full-siblings, and children. Ovarian summary cancers include ovarian, fallopian tube and 
                     peritoneal cancers. Indicate EITHER: 
                     Yes - Immediate Family Member/No/Possibly - Relative or Cancer Type Not Clear
                </Typography>
                <TextField id="ovarsumm_fh" label="Yes - Immediate Family Member/No/Possibly - Relative or Cancer Type Not Clear" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Indicate how many first-degree relatives have breast cancer.
                </Typography>
                <TextField id="breast_fh_cnt" label="#" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Indicate the diagnosis age of the youngest first-degree relative diagnosed with breast cancer.
                    If not applicable, enter .N
                </Typography>
                <TextField id="breast_fh_age" label="# OR .N" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Indicate the diagnosis age of the youngest first-degree relative diagnosed with ovarian, fallopian tube,
                     or peritoneal cancer. Ovarian summary cancers include ovarian, fallopian tube and peritoneal cancers.
                     If not applicable, enter .N
                </Typography>
                <TextField id="ovarsumm_fh_age" label="# OR .N" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Have you ever been told by a doctor that you had a benign ovarian tumor/cyst?

                </Typography>
                <TextField id="benign_ovcyst" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                Have you ever been told by a doctor that you had endometriosis?
                </Typography>
                <TextField id="endometriosis" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Have you ever been told by a doctor that you had uterine fibroid tumors?
                </Typography>
                <TextField id="uterine_fib" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                     During the past three years, have you had a mammogram?

                </Typography>
                <TextField id="mammo_history" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    During the past three years, have you had a pap smear?
                </Typography>
                <TextField id="papsmear_history" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                     During the past three years, have you had a pelvic examination?
                </Typography>
                <TextField id="pelvic_history" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    During the past three years, have you had an ultrasound or scan of your ovaries?

                </Typography>
                <TextField id="usound_history" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    During the past three years, have you had a blood test for ovarian cancer, for example CA-125?

                </Typography>
                <TextField id="ca125_history" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Have you ever been told by a doctor that you had benign or fibrocystic breast disease?

                </Typography>
                <TextField id="bbd" label="Yes/No/Decline to Answer" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Have you ever had one or both of your ovaries removed?
                    Indicate EITHER:
                    Ovaries Not Removed
                    One Ovary - Partial
                    One Ovary - Total
                    Both Ovaries - Partial
                    Both Ovaries - Total
                    Don't Know
                </Typography>
                <TextField id="ovariesr_f" label="" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Enter your age.
                </Typography>
                <TextField id="age" label="#" variant="standard" />
    </Box>
        
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    What is your weight in pounds?
                </Typography>
                <TextField id="weight_f" label="#" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    What is your height in inches?
                </Typography>
                <TextField id="height_f" label="# inches" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Did you have ovaries at this height and weight?
                </Typography>
                <TextField id="ovary_trial_flag" label="Yes/No" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Over the past three months, how much have you beenbothered by abdominal, pelvic, or genital pain?
                    Indicate either:
                    1 - Not at all
                    2 - A little
                    3 A lot
                    4 Somewhere in between a little and a lot
                    7 Refuse to answer
                    8 Not Ascertained
                    9 Don't Know
                </Typography>
                <TextField id="PAIAPG3M_A" label="1/2/3/4/5/6/7/8/9" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Over the last two weeks, how often have you been bothered by poor appetite or overeating?
                    Indicate either:
                    1 - Not at all
                    2 - Several days
                    3 - More than half the days
                    4 - Nearly every day
                    7 - Refused
                    8 - Not Ascertained
                    9 - Don't Know
                </Typography>
                <TextField id="PHQ85_A" label="1" variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    Do you have difficulty walking or climbing steps? Would you say no difficulty,
                    some difficulty, a lot of difficulty, or you cannot do this at all?
                    Indicate either:
                    1 - No difficulty
                    2 - Some difficulty
                    3 - A lot of difficulty
                    4 - Cannot do at all
                    7 - Refused
                    8 - Not Ascertained
                    9 - Don't Know

                </Typography>
                <TextField id="DIFF_A" label="1/2/3/4/5/6/7/8/9" variant="standard" />
    </Box>
        </Grid>
    );
};

export default ClassifierHeader;