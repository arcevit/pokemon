import { ChangeEvent, useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Pagination from "./Pagination";
import { usePokemon } from "../hooks/usePokemon";
import InsetList from "./InsetList";
import { IPokemon } from "../types&Interfaces/interfaces";

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  const {
    allPokemon,
    query,
    setQuery,
    page,
    rowsPerPage,
    setRowsPerPage,
    setPage,
  } = usePokemon();

  const onQueryChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    [setQuery]
  );

  return (
    <main>
      <Container
        className={classes.cardGrid}
        maxWidth="sm"
        data-testid="main-container"
      >
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
              value={query}
              onChange={onQueryChange}
            />
          </Grid>
          <List component="nav" className={classes.root} aria-label="contacts">
            <Pagination
              allPokemonLength={allPokemon.length}
              page={page}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              setPage={setPage}
            />
            <Divider />
            {allPokemon
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((pokemon: IPokemon) => (
                <InsetList key={pokemon.name} pokemon={pokemon} />
              ))}
          </List>
          <Divider />
        </Grid>
      </Container>
    </main>
  );
}

export default Main;
