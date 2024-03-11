<script>export let propDatatable;
const functionChange = function() {
  propDatatable.numberRowsPerPage = propDatatable.stringRowsPerPage === "all" ? Infinity : parseInt(propDatatable.stringRowsPerPage);
  propDatatable.numberActivePage = 1;
};
</script>

<select
	bind:value={propDatatable.stringRowsPerPage}
	on:change={functionChange}
	style={$$props.style}
	class={$$props.class}
	aria-label="Rows per page"
	aria-labelledby="rows-per-page-label"
>
	<slot />
</select>
