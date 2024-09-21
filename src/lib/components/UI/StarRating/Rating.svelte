<script>
	import StarRating from 'svelte-star-rating';

	const slots = 10;
	const rating = 2;
	const config = {
		emptyColor: 'hsl(240, 80%, 85%)',
		fullColor: '#ff7000',
		showText: true,
		size: 42
	};
</script>

<StarRating {rating} {config} />
