<script lang="ts">
	let { name } = $props();

	// TODO: find a better way to do this
	const findColor = (tagName: string) => {
		const charCode = tagName[0].charCodeAt(0);

		if (charCode >= 97 && charCode <= 101) {
			return 'bg-blue-200';
		} else if (charCode >= 102 && charCode <= 106) {
			return 'bg-green-200';
		} else if (charCode >= 107 && charCode <= 111) {
			return 'bg-red-200';
		} else if (charCode >= 112 && charCode <= 116) {
			return 'bg-yellow-200';
		} else if (charCode >= 117 && charCode <= 122) {
			return 'bg-purple-200';
		}
	};
</script>

<a
	href={`/blog/tags/${name}`}
	class={`rounded border p-[0.25rem] text-xs italic ${findColor(name)}`}
>
	#{name}
</a>
