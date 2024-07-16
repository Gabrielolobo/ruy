# Historia de Desenvolvimento

Neste arquivo eu explico o passo a passo do desenvolvimento do projeto. Visto que o pipeline requisitado foi uma integração entre Frontend --> Servidor GraphQL --> Backend, planejo dividir este registro nestas três etapas.

## Frontend

1. **React.js** foi o módulo requisitado para a construção do front. Por ser a etapa do projeto com a qual menos tenho familiaridade, decidi começar por ela.
2. Comecei estudando a documentação base e formas de automatizar o processo de criação de um projeto com React (algo similar ao Poetry em Python), encontrei o Vite.
3. **Vite** é uma ferramenta que estrutura todo o seu projeto React do zero e cria todas as dependências.
4. Depois de configurar o Vite, todo o esqueleto do frontend já estava pronto.
5. Adicionei o componente **SearchBar.jsx** para criar a barra de busca que seria a fonte de input do meu frontend. Ela realiza uma query para o endereço do servidor Graphql a cada input fornecido pelo cliente. 
6. Por fim, adicionei os estilos com **CSS**

## Servidor GraphQL

1. O servidor GraphQL também foi um dos requisitos do projeto. Comecei estudando sua estrutura básica e formas de implementá-lo com a integração requisitada.
2. A minha ideia inicial era construir o servidor utilizando Python através do módulo **Graphene**, por uma questão de afinidade com a linguagem e seus frameworks. Eu não consegui fazer o Graphene funcionar, e por estar perdendo muito tempo, decidi abandonar a abordagem e partir para a implementação com JavaScript.
3. A implementação do GraphQL em JavaScript foi feita através do **Node.js** utilizando **Apollo**. Acabou sendo algo benéfico para o desafio, a interface do Apollo-Sandbox é mais amigável que a do Graphene e me permitiu fazer testes de conectividade de forma mais simples e direta.
4. Por ultimo, utilizei **Express.js** e **Axios** para integrar a database e o algoritmo de busca do backend.

## Backend

1. Deixei o backend por ultimo, por ser a etapa do projeto com a qual mais me familiarizo.
2. Tudo o que eu precisva para o backend eram, uma api que criasse um endpoint do qual o servidor graphql puxasse todos os dados, uma database (fonte de dados), e um algoritmo eficiente de autocomplete.
3. Comecei tentando usar o **Flask** para criar um endpoint, entretanto, comecei a presenciar erros nas configurações que me levaram a procurar outras opções, entre elas estava o **FastAPI**.
4. Para o proposito da aplicação, baixa latencia e endpoint simplificado, o fastapi provou ser ainda mais eficiente que o flask.
5. Para a database, eu escolhi um dicionário jurídico com termos legais da justiça brasileira, nele constam termos e definiçoes. è um arquivo **json** dentro do backend que é importado por main. py para ser trabalhado pelo algoritimo de busca.
6. Quanto ao algoritmo, escolhi por usar uma estrutura de **Árvore de Prefixos**(**Prefix-Tree**/**Trie**) bem comum para tarefas de autocompletar. Ao estruturar a database dessa forma eu evito que a cada input dado pelo cliente, o sistema tenha que varrer o dataset inteiro, varias vezes em busca de prefixos que estajem de acordo. É um algoritmo com alto potencial de escalabilidade.

## Possiveis Implementações

1. A minha ideia inicial para este projeto era fazer um dicionário 100% funcional, por esse motivo, na database (**data.json**) constam não só os termos como as suas respectivas definições. 
2. Meu plano era criar outro componente no frontend chamado **SearchResult.jsx** que funcionaria para gerar uma definição abaixo do buscador quando o termo buscado fosse selecionado pelo ponteiro/enter.
3.Quando clicado, esse termo enviaria uma query para o servidor e para o backend, solicitando a definição completa.
4. Inflizmente, devido ao prazo, não pude implementar a funcionalidade completa.

# Considerações Finais

Este foi um projeto extremamente desafiador que exigiu uma semana de estudo intenso e dedicação exclusiva, eu não era familiar a maior parte das ferramentas utilizadas e isso fez com que eu tivesse que testar e refazer muita coisa. Fico feliz com o resultado final e espero que ele possa cumprir os parametros de um codigo bem feito e satisfatório.