<template>
	<hr>
	<h1>{{ titulo }}</h1>
	<ul class="list-group">
		<li v-for="(info, index) in informations" v-bind:key="index" class="list-group-item list-group-item-dark">
			{{ info }}
		</li>
	</ul>
	<hr>
</template>

<script>
	export default {
		data() {
			return {
				informations: [
					'O ar é incorlor.',
					'Se você fizer uma vaca rir, pode sair leite do nariz dela.',
					'O melhor remédio para sede é água.',
				]
			}
		},
		props: {
			titulo: {
				type: String,
				required: true,
			}
		},
	}
</script>