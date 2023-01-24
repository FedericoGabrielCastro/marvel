<img src="https://static.wikia.nocookie.net/marvel/images/3/30/Universo_Marvel.png/revision/latest?cb=20131005183103&path-prefix=es" alt="image" />

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass" />
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="jest" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="vite" />
    <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" alt="framer motion" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router-dom motion" />
</div>

<br>

<h1 align="center">
    Instructions
</h1>

#### Installing Node Modules

```bash
yarn install
```

#### Starting the Application

```bash
yarn run dev
```

#### Building for Production

```bash
yarn build
```

#### Coverage report

```bash
yarn run test
```

<br>

<h1 align="center">
    Architecture
</h1>

#### API Design

| Endpoint            | Page                                                                                                               | Description             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| _/_                 | [src/views/HomeView/HomeView.jsx](src/views/HomeView/HomeView.jsx)                                                 | Home page.              |
| _/comic_            | [src/views/ComicView/ComicView.jsx](src/views/ComicView/ComicView.jsx)                                             | List of comic view.     |
| _/comic/:id_        | [src/views/ComicDetailsView/ComicDetailsView.jsx](src/views/ComicDetailsView/ComicDetailsView.jsx)                 | Comic details view.     |
| _/character_        | [src/views/CharacterView/CharacterView.jsx](src/views/CharacterView/CharacterView.jsx)                             | List of character view. |
| _/character/:id_    | [src/views/CharacterDetailsView/CharacterDetailsView.jsx](src/views/CharacterDetailsView/CharacterDetailsView.jsx) | Character details view. |

<br>

| Routes                                                                                       | Description                  |
| -------------------------------------------------------------------------------------------- | ---------------------------- |
| [src/routes/RouteProvider/RouteProvider.jsx](src/routes/RouteProvider/RouteProvider.jsx)     | React router dom provider.   |

<br>

| Layout                                                                   | Description        |
| ------------------------------------------------------------------------ | ------------------ |
| [src/layout/MvFooter/MvFooter.jsx](src/layout/MvFooter/MvFooter.jsx)     | Footer.            |
| [src/layout/MvHeader/MvHeader.jsx](src/layout/MvHeader/MvHeader.jsx)     | Navbar.            |
| [src/layout/MvMain/MvMain.jsx](src/layout/MvMain/MvMain.jsx)             | Main component.    |
| [src/layout/MvSection/MvSection.jsx](src/layout/MvSection/MvSection.jsx) | Section component. |
| [src/layout/MvLink/MvLink.jsx](src/layout/MvLink/MvLink.jsx)             | Link component.    |

<br>
<hr>
<br>

<p align='center'><img width='100%' src='https://media.tenor.com/_Xvz9x5xfjwAAAAC/spiderman-tobey-maguire.gif'/></p>**