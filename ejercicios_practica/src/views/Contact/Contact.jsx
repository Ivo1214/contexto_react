import React from 'react';
import styles from "./contact.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1}>Contact Us</h1>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="gatito"
                    height="140"
                    image="data:image/png;base64,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"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Tarjeta Gatito en Contact
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisl tortor, maximus at purus ac, tempor semper ligula.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">Agregar</Button>
                    <Button size="small" color="error">Eliminar</Button>
                </CardActions>
            </Card>
            </div>
        </>
    );
};

export default Contact;