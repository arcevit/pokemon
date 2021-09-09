import { ChangeEvent } from "react";
import TablePagination from "@material-ui/core/TablePagination";

export default function Pagination({
  allPokemonLength,
  page,
  rowsPerPage,
  setRowsPerPage,
  setPage,
}: {
  allPokemonLength: number;
  page: number;
  rowsPerPage: number;
  setRowsPerPage: (a: number) => void;
  setPage: (a: number) => void;
}) {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[10, 20, 50]}
      component="div"
      count={allPokemonLength}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
