#language:pt

Funcionalidade: Teste

	Esquema do Cenario: 01_Teste
		Dado que eu tenha o Token de acesso valido
		Quando for enviada uma requisição com o <Metodo> da API Clear GetBalance
		Então a API da Clear GetBalance retorna a estrutura valida
		
		Exemplos:
		| Metodo                | 
		|postValido             | 
    