import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RealtimeCard(props) {
    const base = "http://localhost:8000/sensor/latest";
    const [temperature, setTemperature] = useState(25);
    const [isRed, setState] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            fetch(base)
                .then(response => response.json())
                .then(response => {
                    setTemperature(response.Temperature)
                    if (response.Temperature <= 30) { setState(false) }
                    else { setState(true) }
                }).catch((error) => []);
        }, 3000);
        return () => clearInterval(timer);
    });

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 28 }} align="center" varian="h3">
                        {props.title}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} align='center'>
                        <p style={{
                            backgroundColor: isRed ? 'red' : 'green',
                        }}>{temperature}</p>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
