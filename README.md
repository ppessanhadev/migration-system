# Migrations system

O intuíto desse repositório é para validação do uso de um sistema de migrations para versionamento do banco de dados voltado para o mongodb.
Para a utilização, fiz uso da biblioteca [mongo-migrate-ts](https://www.npmjs.com/package/mongo-migrate-ts) e automatizei alguns processos com comandos através do `package.json`, dentre eles estão:

- **npm run migration:up**
  - Roda todas as migrations que estão pendentes pela biblioteca
- **npm run migration:down**
  - Desfaz todas as modificações incluídas pelo `up` sem exceções.
- **npm run migration:down-last**
  - Desfaz apenas a última migration inclída pela linha do tempo.
- **npm run migration:status**
  - Mostra o status de todas as migrations em uma tabela, podendo ser:
    - **up**: Migration já incluída.
    - **pending**: Arquivo de migration existente, porém com suas modificações ainda não inclídas.
- **npm run migration:create NOME_DA_MIGRATION**
  - Cria uma nova migration na linha do tempo com o nome usado logo após o comando

*Exemplo de criação de migration*
```bash
npm run migration:create uma-migration
```

*Arquivo criado*
```file
1647533903343_uma-migration.ts
```
