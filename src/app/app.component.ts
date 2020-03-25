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
		if (pessoa == "") {
			alert("Preencha o nome corretamente!");
		} else {
			this.pessoas.push({ nome: pessoa });
			this.pessoa = "";
		}
	}
	excluirPessoa(pessoa: any) {
		let index: number = this.pessoas.findIndex(pe => pe.nome == pessoa.nome);
		this.pessoas.splice(index, 1);
	}
}
