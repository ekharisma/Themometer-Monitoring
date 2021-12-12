import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const maxCall = "Maximum Temperature"

export default function OutlinedCard(props) {
    let base = "http://localhost:8000/sensor/";
    const [temperature, setTemperature] = useState(25)

    if (props.title === maxCall) { base = base + "max" }
    else { base = base + "min" }

    useEffect(() => {
        const timer = setInterval(() => {
            fetch(base)
                .then(response => response.json())
                .then(response => {
                    setTemperature(response.Temperature)
                }).catch((error) => []);
        }, 3000);
        return () => clearInterval(timer);
    });

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" >
                <CardContent>
                    <Typography sx={{ fontSize: 28 }} align="center" varian="h3">
                        {props.title}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} align='center'>
                        <p>{temperature}</p>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
