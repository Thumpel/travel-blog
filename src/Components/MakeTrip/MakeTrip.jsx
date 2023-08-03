import React, { useState } from "react";
import Header from "../../Header/Header";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import places from "../../data/dataTrips/tripsData";
import { AiFillEuroCircle } from "react-icons/ai";
import BookForm from "../BookForm/BookForm";
export default function MakeTrip() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <main>
      <Header />
      <div className="trips">
        <Grid
          container
          spacing={2}
          justifyContent="center"
          marginTop="20px"
          marginLeft="30px"
        >
          {places.map((place, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={4}>
              <Card sx={{ maxWidth: 345, height: 600 }}>
                <CardMedia
                  component="img"
                  height="190"
                  image={place.image}
                  alt="error"
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {place.city}
                  </Typography>
                  <Typography variant="body1">{place.description} </Typography>
                  <Typography variant="body2">
                    <br />
                    <span>
                      price: {place.price} <AiFillEuroCircle />
                    </span>
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="book">
                    <Button variant="contained">Book a tour</Button>
                  {modal && (
                    <BookForm
                      onClose={closeModal}
                      active={modal}
                      setActive={setModal}
                    />
                  )}
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
}
