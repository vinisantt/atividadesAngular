import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styles: ["./app.component.css"]
})
export class AppComponent {
	pessoa: string;
	pessoas: Array<string> = [];

	inserirPessoa(pessoa: string) {
		this.pessoas.push(pessoa);
	}
}
