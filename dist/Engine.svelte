<script>import { functionSearch } from "./functionSearch";
export let propDatatable;
$: {
  propDatatable.arraySorted = propDatatable.arrayRawData.sort(propDatatable.functionSort);
  propDatatable.arraySearched = functionSearch(
    propDatatable.arraySorted,
    propDatatable.stringSearchString,
    propDatatable.arraySearchableColumns
  );
  propDatatable.arrayData = propDatatable.arraySearched.slice(
    propDatatable.numberFirstRow,
    propDatatable.numberLastRow
  );
}
$: {
  propDatatable.numberFirstRow = (propDatatable.numberActivePage - 1) * propDatatable.numberRowsPerPage;
  propDatatable.numberLastRow = propDatatable.numberActivePage * propDatatable.numberRowsPerPage;
  propDatatable.arrayData = propDatatable.arraySearched.slice(
    propDatatable.numberFirstRow,
    propDatatable.numberLastRow
  );
}
</script>
