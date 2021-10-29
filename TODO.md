# Funcionalidades que o bot interno da Tech precisa ter

## Observações

- [ ] O bot terá seu proprio banco MongoDB
  - O ORM a ser usado deve ser o TypeORM
- [ ] Todas as rotas de requests para a API devem ser mapeadas em um arquivo de config
  - O url do dominio da API tbm deve ser mapeado nesse mesmo arquivo
- [ ] Todas as msgs enviadas pelo bot devem ser Embed

## Todo

- [ ] Quando um membro entrar no servidor, o bot deve fazer uma request para a API da Tech, para verificar se aquele usuário já está cadastrado
  - Deverá ser enviada uma msg para avisar que isso está acontecendo, e ao terminar a verificação, a msg deverá ser editada com as informações da verificação
  - Caso já esteja, a API vai retornar um obj, com uma chave `roles`, que terá o valor de um array com os "codigos" (/ codnomes / apelidos) das roles que devem ser adicionadas ao usuário (algo como "MEMBER", "JAVASCRIPT", etc)
  - Para tratar esses apelidos recebidos, deve ser usado um enum (typescript), com chave sendo o apelido e o ID da role sendo o valor
- [ ] Ter um sistema para saber qual invite a pessoa usou para entrar no servidor
  - [Dica](https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/coding-guides/tracking-used-invites.md)
  - Dica: Cachear os dados dos invites na memoria, para que não precise fazer requests pro banco toda hora, e ir atualizando isso conforme os membros entram / saem
  - Quando uma pessoa entrar no servidor via invite de um membro, o bot deverá fazer uma request para a API, enviando o ID da pessoa que entrou e da pessoa que convidou ela
- [ ] Ter um comando pra listar a quantidade de membros por role
  - ADM Only
- [ ] Ter um comando para atualizar uma msg embed
  - ADM Only
