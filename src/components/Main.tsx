import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loading: {
    textAlign: "center",
  },
  root: {
    width: "100%",
    maxWidth: 500,
    maxHeight: 630,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  input: {
    minWidth: 275,
  },
}));

function Main() {
  const classes = useStyles();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              placeholder="Search a pokemon by name"
              className={classes.input}
            />
          </Grid>
          <List component="nav" className={classes.root} aria-label="contacts">
            <Divider />
            {arr.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
          <Divider />
        </Grid>
      </Container>
    </main>
  );
}

export default Main;
