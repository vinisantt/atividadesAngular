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

	inserirPessoa(pessoa: string, idade: number) {
		if (pessoa == "" || idade == 0) {
			alert("Preencha o nome e idade corretamente!");
		} else {
			this.pessoas.push({ nome: pessoa, idade: idade });
			this.pessoa = "";
			this.idade = 0;
		}
	}
	excluirPessoa(pessoa: any) {
		let index: number = this.pessoas.findIndex(pessoa => pessoa.nome == pessoa.nome);
		this.pessoas.splice(index, 1);
	}
}
