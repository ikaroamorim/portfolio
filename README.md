
![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/github/repo-size/ikaroamorim/portfolio)
[![image](https://img.shields.io/github/last-commit/ikaroamorim/portfolio)](https://github.com/ikaroamorim/portfolio/commits/master)
![image](https://img.shields.io/badge/license-MIT-brightgreen)
[![image](https://img.shields.io/github/stars/ikaroamorim/portfolio?style=social)](https://github.com/ikaroamorim/promobit-movies/stargazers)

<h1 align="center">Portfolio</h1>

<p align="center">
 <a href="#descricao">Descrição do Projeto</a> •
 <a href="#instalacao">Instalação</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#imagens">Imagens</a>
</p>

<a name="descricao"></a>
## 💻 Descrição do Projeto 
<p> Esse é um breve portfólio, criado com intuito de demonstrar as principais experiências e projetos, o projeto utiliza uma api em Node JS que consome dados de um banco PostgreSQL e utiliza a gereção Geração de Páginas Estáticas (SSG). (https://portfolio-mu.vercel.app/) </p>

<a name="instalacao"></a>
## 📦 Instalação Local

### Pré-requisitos
Para a utilização é necessária a instalação das seguintes dependências
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com)
[Node 12.22.0+](https://nodejs.org/en/)

### Instalação e execução em Local

```bash
# Clone este repositório
$ git clone https://github.com/ikaroamorim/portfolio.git

# Acesse a pasta do projeto no terminal/cmd
$ cd portfolio

# Instale as dependências (utilizando yarn, mas pode também ser utilizado o npm)
$ yarn install
ou 
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev
ou 
$ npm run dev

# Scripts Criação dos Bancos (Migração)
heroku run bash
npx sequelize-cli model:generate --name Projects --attributes imageUrl:string,imageAlt:string,site:string,code:string,ptTitle:string,ptDescription:text,enTitle:string,enDescription:text
npx sequelize-cli model:generate --name Contents --attributes url:string,stack:string,imageUrl:string,imageAlt:string,videoId:string,site:string,ptTitle:string,ptDescription:text,enTitle:string,enDescription:text
npx sequelize-cli db:migrate
```

<a name="tecnologias"></a>
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

<a name="autor"></a>
## 👨‍💻 Autor
<a href="https://www.linkedin.com/in/ikaroamorimesilva/">
 <img style="borderRadius: 50%;" src="https://github.com/ikaroamorim.png" width="100px;" alt=""/>
 <br />
 <sub><b>Ikaro Amorim e Silva</b></sub>
 </a>

Feito com ❤️ por Ikaro Amorim e Silva

[![Twitter Badge](https://img.shields.io/badge/-@ikaroamorim-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/ikaroamorim)](https://twitter.com/ikaroamorim) [![Linkedin Badge](https://img.shields.io/badge/-Ikaro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ikaroamorimesilva/)](https://www.linkedin.com/in/ikaroamorimesilva/) 
[![Gmail Badge](https://img.shields.io/badge/-ikaro.amorim@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:ikaro.amorim@gmail.com)](mailto:ikaro.amorim@gmail.com)

<a name="imagens"></a>
## 🌍 Imagens e vídeos

<p align="center">
   <img alt="Home" title="#Home" src="./githubAssets/home.png" width="600px">
</p>

<p align="center">
   <img alt="Professional Experience" title="#Professional Experience" src="./githubAssets/profExperience.png" width="600px">
</p>

<p align="center">
   <img alt="Projects" title="#Projects" src="./githubAssets/projects.png" width="600px">
</p>

<p align="center">
   <img alt="Contents" title="#Contents" src="./githubAssets/contents.png" width="600px">
</p>

<p align="center">
   <img alt="Slug" title="#Slug" src="./githubAssets/Detail.png" width="600px">
</p>

<p align="center">
   <img alt="Vercel Analytics" title="#vAnalytics" src="./githubAssets/vercelAnalytics.png" width="600px">
</p>