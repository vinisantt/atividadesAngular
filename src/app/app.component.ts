import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.styles.css"]
})
export class AppComponent {
	pessoa: string;
	pessoas: Array<string> = [];

	inserirPessoa(pessoa: string) {
		this.pessoas.push(pessoa);
	}
	excluirPessoa(pessoa: string) {
		let index = this.pessoas.indexOf(pessoa);
		this.pessoas.splice(index);
	}
}
