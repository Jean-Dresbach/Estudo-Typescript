# Typescript

## Istalação local *(instala o Typescript como uma dependência de projeto)*

O Typescript é instalado como uma dependência do Node.js. Portanto o pré-requisito para a instalação e uso do Typescript é o Node.js no computador.

### Primeiro passo (gerar o package.json)

```bash
npm init -y
```
ou
```bash
yarn init -y
```

### Segundo passo (instalar o typescript como uma devDependecy)

```bash
npm i -D typescript @types/node ts-node-dev
```
ou
```bash
yarn add -D typescript @types/node ts-node-dev
```

**@types/node -** baixa os tipos do node.

**ts-node-dev -** faz o reload e mostra as alterações no log.


### Terceiro passo (Configurar o package.json)

```json
{
  "name": "Estudo-Typescript",
  "version": "1.0.0",
  "main": "index.ts", // Alterar para .ts
  "repository": "https://github.com/Jean-Dresbach/Estudo-Typescript.git",
  "author": "Jean Dresbach <jeanr.dresbach@gmail.com>",
  "license": "MIT",
  "scripts": {
    "dev": "tsnd --respawn --transpile-only ./src/atividades-em-aula/atividade-aula-09-11-2023/index.ts", // tsnd = ts-node-dev (compila o TS e restarta quando o mesmo é modificado); --respawn (serve para que o ts-node-dev fique observando alterações do código, para transpilar e fazer auto reload da aplicação); --transpile-only (faz com o código seja apenas transpilado e não ocorra a checagem da sintaxe); /scr/caminho do arquivo a ser observado e transpilado
    "build": "tsc"
  },
  "devDependencies": {
    "@types/node": "^20.9.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.2.2"
  }
}
```

### Terceiro passo (gerar o tsconfig.json)

```bash
npx tsc --init
```

**Observação:** 
- npm run: é usado para executar scripts definidos no arquivo package.json 
- npx: ferramenta que vem junto com o npm; é usado para executar pacotes diretamente e também é útil para executar comandos de pacotes que não estão instalados globalmente.

ou

```bash
yarn tcs --init
```

### Quarto passo (configurar tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2022", // Define para qual versão do ECMAScript (ES) o TypeScript compilará seu código.
    "module": "commonjs", // Especifica o sistema de módulos a ser utilizado (CommonJS é amplamente utilizado no ambiente Node.js.).
    "rootDir": "./src", // Define o diretório raiz onde o TypeScript procura por arquivos; Todos os caminhos dos arquivos TypeScript especificados em "include" serão relativos a este diretório.
    "outDir": "./dist", // Indica o diretório de saída para os arquivos JavaScript transpilados.
    "esModuleInterop": true, // Permite interoperabilidade fácil entre os sistemas de módulos ES6 e CommonJS; Isso é útil ao importar módulos que usam a convenção de exportação padrão ES6 em um ambiente CommonJS.
    "forceConsistentCasingInFileNames": true, // Ajuda a evitar problemas de arquivos em sistemas de arquivos que diferenciam maiúsculas de minúsculas. Garante consistência na forma como os nomes de arquivos são tratados.
    "skipLibCheck": true, // Evita a verificação de bibliotecas de definições de tipo arquivos .d.ts
  },
  "include": ["src/**/*.ts"], // Lista de padrões de inclusão que especificam quais arquivos TypeScript devem ser incluídos na compilação (todos os arquivos .ts dentro do diretório "src" e suas subpastas serão incluídos).
  "exclude": ["./node_modules"] // Lista de padrões de exclusão que especificam quais arquivos ou diretórios não devem ser incluídos na compilação/
}
```