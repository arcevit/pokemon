import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { IProfile } from "../types&Interfaces/interfaces";
import ProfileCard from "../components/ProfileCard";
import IconButton from "@material-ui/core/IconButton";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  loading: {
    textAlign: "center",
  },
}));

type TParams = {
  id: string | number;
};

function PokemonProfile() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IProfile>({} as IProfile);
  const classes = useStyles();
  const params = useParams() as TParams;
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params?.id}`
      );
      if (res.data) {
        setPokemon(res.data);
      }
      setLoading(false);
    })();
  }, [params?.id]);

  return loading ? (
    <h2 className={classes.loading}>Loading ...</h2>
  ) : (
    <main>
      <Container className={classes.cardGrid} maxWidth="sm">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => history.push("/")}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
        <ProfileCard pokemon={pokemon} />
      </Container>
    </main>
  );
}

export default PokemonProfile;
