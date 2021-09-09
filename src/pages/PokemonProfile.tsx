import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Container from "@material-ui/core/Container";
import { makeStyles, Theme } from "@material-ui/core/styles";

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
  const [pokemon, setPokemon] = useState<any>();
  const classes = useStyles();
  const params = useParams() as TParams;

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
        profile{pokemon.name}
      </Container>
    </main>
  );
}

export default PokemonProfile;
