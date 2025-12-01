Notwendige Module:
- `npm install`
- `npm install express ejs` oder `bun add express ejs`
- `npm install cors`oder `bun add cors`
- `npm install jsonwebtoken` oder `bun add jsonwebtoken`
- `npm install bcrypt` oder `bun add bcrypt`
- `npm install cookie-parser` oder `bun add cookie-parser`


Um TypeScript zu vervenden:
- `npm install --save-dev @types/express` oder `bun add @types/express`
- `npm install --save-dev @types/cors` oder `bun add @types/cors`
- `npm install --save-dev @types/jsonwebtoken` oder `bun add @types/jsonwebtoken`
- `npm install --save-dev @types/bcrypt` oder ` bun add @types/bcrypt`

- <!! In userem Fall reicht das "npm-Paket". Für zukünftige Projekte ist das "bun-Paket" besser weil schneller. Dann ändert sich aber auch `package-lock.json` in `bun.lockb`. Wichtig ist das man sich für ein Paket entscheidet ===> sonst Konflikte !!>

Server starten mit:

bun --watch server.ts





Arbeitsablauf:

- notwendige Ordner erstellen ===> backend, frontend

- Ordner backend ===> json, router, utilities + die Datei server.ts
- in json ===> users.json (vielleicht auch roles.json       <!! Bitte prüfen !!>)
- in router ===> Dateien => dataRouter.ts + loginRouter.ts
- in utilities ===> Dateien => data.ts, generalFunction.ts, middleware.ts, types.ts (vielleicht auch crypto.ts, cryptoHelper-V1.ts, cryptoHelper-V2.ts, cryptoHelper.ts     <!! Bitte Prüfen !!>)

- Ordner frontend ===> Dateien => auth.html, style.css