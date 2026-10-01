# Construtora Unno | SASS Architecture Refactor

Uma *landing page* moderna e responsiva desenvolvida para o setor da engenharia e construção civil. Este projeto foca-se na implementação de uma arquitetura Front-end corporativa através da refatoração de CSS monolítico para SASS modular.

## Visão Geral do Projeto
O objetivo técnico desta iteração foi criar uma interface altamente escalável e de fácil manutenção, eliminando conflitos de especificidade e garantindo um controlo preciso sobre a responsividade e o tema visual (Light/Dark mode) através de variáveis CSS nativas combinadas com o poder de aninhamento do SASS.

##  Tecnologias Utilizadas
* **React (Vite):** Renderização rápida e gestão de componentes.
* **Dart Sass (SCSS):** Estilização modular com base no padrão 7-1 (Abstracts, Base, Components).
* **CSS Grid & Flexbox:** Estruturação avançada de layouts (ex: Grelha assimétrica na secção de Projetos).
* **Lucide React:** Iconografia leve e escalável.

##  Destaques da Arquitetura SASS
* **Modularidade:** Separação estrita entre utilitários globais, resets e ficheiros de componentes individuais (`_hero.scss`, `_projects.scss`, etc.).
* **Mixins Responsivos:** Gestão centralizada de *Media Queries* através de mapas dinâmicos (`@include respond-to('medium')`), injetados diretamente no escopo de cada componente.
* **Integração de Temas:** Transição fluida entre Light e Dark Mode gerida por variáveis no `:root` e atributos de dados no DOM.

##  Como Executar Localmente
1. Clone o repositório: `git clone https://github.com/SEU-USUARIO/unno-engenharia-sass-architecture.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`