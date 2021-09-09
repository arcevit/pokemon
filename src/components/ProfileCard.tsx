import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IProfile } from "../types&Interfaces/interfaces";
import { format } from "date-fns";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    margin: "0 auto",
  },
  media: {
    height: 0,
    paddingTop: "98.25%",
  },
  avatar: {
    backgroundColor: red[500],
    textTransform: "capitalize",
  },
  name: {
    textTransform: "capitalize",
  },
}));

function ProfileCard(props: {
  pokemon: Pick<
    IProfile,
    "name" | "sprites" | "height" | "weight" | "abilities"
  >;
}) {
  const classes = useStyles();
  const { name, sprites, height, weight, abilities } = props.pokemon;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={format(new Date(), "do MMMM Y")}
        className={classes.name}
      />

      <CardMedia
        className={classes.media}
        //@ts-ignore
        image={sprites?.other["official-artwork"].front_default}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" component="p" className={classes.name}>
          Name :{name}
        </Typography>
        <Typography variant="body1" component="p">
          Height :{height}
        </Typography>
        <Typography variant="body1" component="p">
          Weight:{weight}
        </Typography>
        <Typography variant="body1" component="p">
          Abilities :
          {abilities.map(({ ability }) => (
            <span key={ability?.name} className={classes.name}>
              {ability?.name},{" "}
            </span>
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProfileCard;
