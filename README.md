# Gerador de Cards — Carreta da Saúde

Versão pronta para subir no Railway.

## Como subir no Railway

1. Extraia este ZIP.
2. Suba a pasta para um repositório no GitHub.
3. No Railway, clique em **New Project**.
4. Escolha **Deploy from GitHub repo**.
5. Selecione o repositório.
6. O Railway detectará Node.js automaticamente.
7. Aguarde o deploy e abra a URL gerada.

## Rodar localmente

```bash
npm install
npm start
```

Depois abra:

```text
http://localhost:3000
```

## Arquivos principais

- `public/index.html`: sistema do gerador.
- `server.js`: servidor Express.
- `package.json`: dependências e comando de start.
- `railway.json`: configuração do Railway.
