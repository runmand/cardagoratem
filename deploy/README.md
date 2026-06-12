# Gerador de Cards — Carreta da Saúde

Aplicativo de uma única página (HTML/JS), tudo embutido em `index.html`
(incluindo as imagens em base64). Aqui adicionamos um servidor mínimo
em Node/Express só para servir esse arquivo no Railway.

## Arquivos
- `index.html` — o app (igual ao seu original)
- `server.js` — servidor Express simples
- `package.json` — dependências e comando de start
- `railway.json` — configuração do Railway

## Como subir no Railway

### Opção 1: via GitHub
1. Crie um repositório no GitHub e suba todos os arquivos desta pasta.
2. No Railway: **New Project → Deploy from GitHub repo** → selecione o repo.
3. O Railway detecta o `package.json`, instala dependências e roda
   `npm start` automaticamente.
4. Após o deploy, Railway gera uma URL pública (em Settings → Networking →
   Generate Domain, se ainda não tiver).

### Opção 2: via Railway CLI (sem GitHub)
```bash
npm install -g @railway/cli
railway login
cd pasta-deste-projeto
railway init
railway up
```
Depois rode `railway domain` para gerar a URL pública.

## Testar localmente
```bash
npm install
npm start
```
Abra http://localhost:3000
