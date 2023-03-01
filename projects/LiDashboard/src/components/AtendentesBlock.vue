<template>
	<ul class="list-group">
	<li v-for="(atendente, index) in atendentes" v-bind:key="index" class="list-group-item list-group-item-info">
		<p>{{ atendente.nome }} - Tel: {{ atendente.telefone }}</p>
		<p>{{ atendente.profissao }}</p>
	</li>
	</ul>
	<hr>
	<div>
		<p>
			<input placeholder="Nome" type="text" v-model="name" class="form-control" />
		</p>
		<p>
			<input placeholder="Telefone" type="text" v-model="phone" class="form-control" />
		</p>
		<p>
			<input placeholder="Profissão" type="text" v-model="job" class="form-control" />
		</p>
		<div class="d-grid gap-2">
			<button v-on:click="addAtendente" class="btn btn-info">Cadastrar Atendente</button>
		</div>
	</div>
</template>

<script>
  export default {
		data() {
			return {
				atendentes: [
					{
						nome: 'João',
						telefone: '99998888',
						profissao: 'Enxugador de gelo',
					},
					{
						nome: 'Cleber',
						telefone: '88889999',
						profissao: 'Vendedor de boletos',
					},
				],
				name: '',
				phone: '',
				job: '',
			}
		},
		methods: {
			addAtendente() {
				if (this.name.trim() === '' || this.phone.trim === '' || this.job.trim() === ''){
					return;
				}
				this.atendentes.push({
					nome: this.name,
					telefone: this.phone,
					profissao: this.job,
				})
				this.name = '';
				this.phone = '';
				this.job = '';
			}
		}
	}
</script>