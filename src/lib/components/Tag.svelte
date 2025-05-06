<script lang="ts">
	let { name } = $props();

	// TODO: find a better way to do this
	const findColor = (tagName: string) => {
		const charCode = tagName[0].charCodeAt(0);

		if (charCode >= 97 && charCode <= 101) {
			return 'text-blue-700';
		} else if (charCode >= 102 && charCode <= 106) {
			return 'text-green-700';
		} else if (charCode >= 107 && charCode <= 111) {
			return 'text-red-700';
		} else if (charCode >= 112 && charCode <= 116) {
			return 'text-yellow-700';
		} else if (charCode >= 117 && charCode <= 122) {
			return 'text-purple-700';
		}
	};
</script>

<a href={`/blog/tags/${name}`} class={`text-xs italic ${findColor(name)}`}>
	#{name}
</a>
