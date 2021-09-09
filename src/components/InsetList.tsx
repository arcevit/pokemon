import { createStyles, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import { IPokemon } from "../types&Interfaces/interfaces";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      backgroundColor: red[500],
      textTransform: "capitalize",
    },
    name: {
      textTransform: "capitalize",
    },
  })
);

const InsetList = (props: { pokemon: IPokemon }) => {
  const classes = useStyles();
  const { name, url } = props.pokemon;
  const history = useHistory();

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar aria-label="recipe" className={classes.avatar}>
          {name.charAt(1)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} className={classes.name} />
      <ListItemSecondaryAction>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            history?.push(`/pokemon/${url.replace(/.*\/(\w+)\/?$/, "$1")}`)
          }
        >
          Learn More
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default InsetList;
