<script setup>
	import HistoryBlock from './HistoryBlock.vue';
	import { ref } from 'vue';
</script>

<template>
	<p>
		<textarea v-model="history" placeholder="Digite algo para o histórico" class="form-control" />
	</p>
	<div class="d-grid gap-2">
		<button v-on:click="addHistory" class="btn btn-info">Gravar</button>
	</div>
	<HistoryBlock ref="historyRef" />
</template>

<script>
	export default {
		data() {
			return {
				history: '',
				historyRef: ref(null),
			}
		},
		methods: {
			addHistory() {
				if (this.history.trim() === ''){
					return;
				}
				this.$refs.historyRef.history.push(this.history);
				this.history = '';
			}
		}
	}
</script>