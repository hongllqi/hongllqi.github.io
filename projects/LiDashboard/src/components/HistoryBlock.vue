<template>
	<hr>
	<h1>Histórico</h1>
	<ul class="list-group">
		<li v-for="(message, index) in history" v-bind:key="index" class="list-group-item list-group-item-primary">
			<p>{{ message }}</p>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				history: [
					'Este histórico foi digitado por um fantasma! MUAHAHAHAAAA mentira, foi o dev.',
				]
			}
		},
	}
</script>