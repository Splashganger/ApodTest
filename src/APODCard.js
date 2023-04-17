import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const APODCard = ({ apod }) => {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          component={apod.media_type === "image" ? "img" : "iframe"}
          alt={apod.title}
          height={apod.media_type === "image" ? "800" : "800"}
          src={apod.url}
          title={apod.title}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {apod.title} - {apod.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {apod.explanation}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Read More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default APODCard;
