import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.styles.css"]
})
export class AppComponent {
	pessoa: string = "";
	idade: number = 0;
	pessoas: Array<any> = [];
	maior: any;
	menor: any;

	inserirPessoa(pessoa: string, idade: number) {
		if (pessoa == "" || idade == 0) {
			alert("Preencha o nome e idade corretamente!");
		} else {
			let p = { nome: pessoa, idade: idade };
			this.pessoas.push(p);
			this.pessoa = "";
			this.idade = 0;
			this.atualizaEstatisticas();
		}
	}
	excluirPessoa(pessoa: any) {
		let index: number = this.pessoas.findIndex(pe => pe.nome == pessoa.nome);
		this.pessoas.splice(index, 1);
		this.atualizaEstatisticas();
	}

	atualizaEstatisticas() {
		if (this.pessoas.length > 0) {
			this.menor = this.pessoas[0];
			this.maior = this.pessoas[0];

			this.pessoas.find(pe => {
				if (pe.idade < this.menor.idade) {
					this.menor = pe;
				}
				if (pe.idade > this.maior.idade) {
					this.maior = pe;
				}
			});
		} else {
			this.menor = undefined;
			this.maior = undefined;
		}
	}
}
