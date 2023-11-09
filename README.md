# Typescript

## Istalação local *(instala o Typescript como uma dependência de projeto)*

O Typescript é instalado como uma dependência do Node.js. Portanto o pré-requisito para a instalação e uso do Typescript é o Node.js no computador.

### Primeiro passo (gerar o package.json)

```bash
npm init -y

ou

yarn init -y
```

### Segundo passo (instalar o typescript como uma devDependecy)

```bash
npm i -D typescript @types/node ts-node-dev

ou

yarn add -D typescript @types/node ts-node-dev
```

**@types/node -** baixa os tipos do node.

**ts-node-dev -** faz o reload e mostra as alterações no log.

### Terceiro passo (gerar o tsconfig.json)

```bash
npx tsc --init

ou

yarn tcs --init
```

