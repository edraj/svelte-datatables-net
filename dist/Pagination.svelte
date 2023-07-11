<script>import Pagination from "pagination-svelte";
export let propDatatable;
let { propDatatable: _, ...objectOtherProps } = $$props;
</script>

<Pagination
	bind:propActivePage={propDatatable.numberActivePage}
	propNumberOfPages={propDatatable.numberRowsPerPage === Infinity
		? 1
		: Math.ceil(propDatatable.arraySearched.length / propDatatable.numberRowsPerPage)}
	{...objectOtherProps}
/>
