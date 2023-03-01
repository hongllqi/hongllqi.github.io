<script setup>
	import AtendentesBlock from './components/AtendentesBlock.vue';
	import InformationBlock from './components/InformationBlock.vue';
	import FormHistoryBlock from './components/FormHistoryBlock.vue';
</script>

<template>
  <header>
		<AtendentesBlock />
		<InformationBlock titulo="Informações úteis" />
  </header>

  <main>
		<FormHistoryBlock />
  </main>
</template>
