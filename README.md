# Portfólio - Gustavo Larocca

Portfólio pessoal desenvolvido com React, TypeScript e Vite, apresentando minhas habilidades, experiências e projetos.

## 🚀 Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js
- React Icons

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GustavoLarocca/Pagina-Pessoal.git
```

2. Instale as dependências:
```bash
cd Pagina-Pessoal
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

## 🌐 Deploy

Este projeto está configurado para deploy automático na Vercel.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
