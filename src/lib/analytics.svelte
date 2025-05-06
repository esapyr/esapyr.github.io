<!--
<script lang="ts">
	import { page } from '$app/state';
	const measurementID = 'G-B2DFRZV5HD';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', measurementID, {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementID}`}>
	</script>
	<script>
		const measurementID = 'G-B2DFRZV5HD';
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', measurementID);
	</script>
</svelte:head>
-->
