
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const WizzardComponent = ({ steps, active }: any) => {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={active} alternativeLabel>
                    {steps.map((label: any) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    )
}

export default WizzardComponent





