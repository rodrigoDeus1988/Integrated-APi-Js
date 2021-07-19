const {defineFeature, loadFeature} = require('jest-cucumber');
const feature = loadFeature('./test/features/TesteSystem/Teste.feature');


    

defineFeature(feature, test => {

    const whenForEnviadaUmaRequisicao = when => {
        when(/^for enviada uma requisição com o (.*) da API Clear GetBalance$/, async (metodo) =>{
            
            response =  await TesteService[metodo]();
            
        });
    }

    let TesteService = require('../../service/TesteSystem/TesteService');

    let
        token,
        response;
        


        test('01_Teste', ({given, when, then}) => {

            given('que eu tenha o Token de acesso valido', async () => {
        
            });

            whenForEnviadaUmaRequisicao(when);

            then('a API da Clear GetBalance retorna a estrutura valida', async () => {
               
            }); 


        });



});
