<script>export let propDatatable;
export let propPlaceholder = "Type here...";
</script>

<input
	bind:value={propDatatable.stringSearchString}
	on:input={() => (propDatatable.numberActivePage = 1)}
	type="search"
	placeholder={propPlaceholder}
	style={$$props.style}
	class={$$props.class}
/>
