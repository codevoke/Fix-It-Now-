import * as React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {CardsContainer, CardsContainerItem} from '../Components/CardsContainer'

export default function MobileDashboardPage () {
    const [cards, setCards] = React.useState([]);
    const navigate = useNavigate();
    
    React.useEffect(()=>{
        axios.get('/problems'
        )
        .then(res=>{
                setCards(res.data.problems);
            })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return (
        <>
            <CardsContainer container sx={{width: '85vw', margin: '0 auto', marginTop: '5vh'}}>
            {
                (cards.map(card => (
                <CardsContainerItem item key={card.problem_id}>
                    <Card sx={{ maxWidth: 350 }}>
                        <CardActionArea onClick={() => navigate("/problem/"+card.problem_id)}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={card.image_url}
                                alt={card.alt_text}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </CardsContainerItem>
            ))) }
            </CardsContainer>
        </>
    );
}