<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Clear API - API REST</h3>

<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

Projeto de Automação para o sistema Clear na tecnologia REST API.

Nesse projeto são utilizados as seguintes bibliotecas:

* [Jest](https://jestjs.io/)
* [Supertest](https://github.com/visionmedia/supertest)
* [Jest-Cucumber](https://github.com/bencompton/jest-cucumber)
* [Cross-Env](https://github.com/kentcdodds/cross-env)

<!-- GETTING STARTED -->

## Iniciando

Siga os passos a seguir para fazer uma cópia e executar localmente o projeto

### Pré-Requisitos

Para esse projeto você irá precisar do NodeJS configurado em sua máquina: 
* npm
```sh
npm install npm@latest -g
```

<!-- INSTALLATION -->
### Instalação
 
*  Faça um clone do repositório
```sh
git clone https://xpinvestimentos.visualstudio.com/Projetos/_git/XP.Quality.Clear.IntegratedTests
```
* Instale as dependências NPM
```sh
npm install
```
<!-- RUNNING -->
### Execução

```
O projeto utiliza variáveis de ambiente para montar as requisições e utilizar recursos criados nas helpers.

LOG=true -> Variável que habilita log em tempo de console e output em arquivo txt (TRUE/FALSE) 
CONFIG=test.dev.config.js -> Variável que seta ambiente que será executado (Confira arquivos da pasta /config)
SNAPSHOT=false -> Variável que habilita teste de contrato (TRUE/FALSE)
TAG=@smoke -> Variável que faz o filtro por tag existentes nos arquivos .feature (@scenario)

Portanto, o comando a seguir executa todos os testes do sample

cross-env LOG=true CONFIG=test.dev.config.js SNAPSHOT=false jest

É possível também executar o projeto a partir das variáveis setadas no arquivo package.json.

As opções disponíveis são:

npm run test:dsv
npm run test:hml
npm run test:prd
```

<!-- ROADMAP -->
## Roadmap

Aqui você acompanha os [tickets em desenvolvimento]: 

https://xpcorretora.sharepoint.com/:x:/r/sites/QA-Cross/_layouts/15/Doc.aspx?sourcedoc=%7B40764703-546C-4956-8FE3-4C3A243E2AE2%7D&file=ControleTestesRegressivos_CanaisRV_Clear.xlsx&action=default&mobileredirect=true&cid=8d426a11-bf83-4cfc-9f25-a23d2f9317f4

<!-- CONTRIBUTING -->
## Contribuindo

Contribuições são sempre bem vindas. Todas as contribuições serão analisadas e devidamente apreciadas!

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça um push das suas alterações (`git push origin feature/AmazingFeature`)
5. Abra o Pull Request
