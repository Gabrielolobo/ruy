# Historia de Desenvolvimento

Neste arquivo eu explico o passo a passo do desenvolvimento do projeto. Visto que o pipeline requisitado foi uma integração entre Frontend --> Servidor GraphQL --> Backend, planejo dividir este registro nestas três etapas.

## Frontend

1. **React.js** foi o módulo requisitado para a construção do front. Por ser a etapa do projeto com a qual menos tenho familiaridade, decidi começar por ela.
2. Comecei estudando a documentação base e formas de automatizar o processo de criação de um projeto com React (algo similar ao Poetry em Python), encontrei o Vite.
3. **Vite** é uma ferramenta que estrutura todo o seu projeto React do zero e cria todas as dependências.
4. Depois de configurar o Vite, todo o esqueleto do frontend já estava pronto.

## Servidor GraphQL

1. O servidor GraphQL também foi um dos requisitos do projeto. Comecei estudando sua estrutura básica e formas de implementá-lo com a integração requisitada.
2. A minha ideia inicial era construir o servidor utilizando Python através do módulo **Graphene**, por uma questão de afinidade com a linguagem e seus frameworks. Eu não consegui fazer o Graphene funcionar, e por estar perdendo muito tempo, decidi abandonar a abordagem e partir para a implementação com JavaScript.
3. A implementação do GraphQL em JavaScript foi feita através do **Node.js** utilizando **Apollo**. Acabou sendo algo benéfico para o desafio, a interface do Apollo-Sandbox é mais amigável que a do Graphene e me permitiu fazer testes de conectividade de forma mais simples e direta.