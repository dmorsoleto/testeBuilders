# Teste Builders

Projeto realizado para teste de conhecimento para a empresa Builders.

## Pré requisitos

- [Node.js > 14](https://nodejs.org) e npm (Recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13.3](https://developer.apple.com/xcode)
- [Cocoapods 1.11.3](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Dependências Base

- [axios](https://github.com/axios/axios) para conexões.
- [react-native-config](https://github.com/luggit/react-native-config) gerenciamento de variáveis de ambientes.
- [@react-navigation](https://reactnavigation.org/) biblioteca de navegação.
- [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service) para pegar geo localização do usuário.
- [react-native-permissions](https://github.com/zoontek/react-native-permissions) para gerenciar permissões do app com o usuário.
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated) dependência do react navigation.
- [lottie-react-native](https://github.com/lottie-react-native/lottie-react-native) para animações em json.
- [jest](https://facebook.github.io/jest/) para testes.

## Uso

### Setup Inicial 

- Clone o projeto em seu computador
- Vá para a raiz da pasta do projeto e execute `yarn install`.
- Vá para a pasta ios e execute `pod install`
- Execute `yarn run ios` ou `yarn run android` para iniciar a aplicação.

Observação: Por favor leia a parte de requisições e se certifique que tenha todas funcionando.

## Estrutura de pasta

Esse projeto contém uma estrutura simples de pasta:

- `src`: Essa pasta contem todo o código da aplicação a ser executado
  - `config`: Essa pasta contém todas as configurações iniciais do app.
  - `features`: Pasta que contém toda a lógica das features existentes no app, seguindo convenção feature packing
    - `navigation.tsx`: Arquivo com a configuração de toda a navegação persistente a feature atrelada
    - `screens`: Pasta com a lógica das telas persistente a feature atrelada
        - `ui`: Pasta com o código da tela somente, sem a lógica da tela 
    - `services`: Pasta com a lógica dos serviços persistente a feature atrelada
    - `types`: Pasta com a lógica dos tipos exportados persistente a feature atrelada
  - `helpers`: Pasta com a lógica de classes de auxílio para todo o app
  - `navigation`: Pasta com a lógica de configuração da navegação do app 
  - `providers`: Pasta com a lógica dos providers da aplicação
  - `__tests__`: Pasta com toda a lógica de testes
  - `assets`: Pasta com arquivos variados necessários para a aplicação
    - `animations`: Pasta com os arquivos de animação para a aplicação
    - `imgs`: Pasta com os arquivos de imagem para a aplicação
  - `App.js`: Componente principal para começar toda a aplicação.
  - `index.js`: Ponto de entrada de aplicação.

## Configurando ambiente
### Usando scripts no console

O projeto já contém alguns scripts já definidos no arquivo package.json. Lembre-se que precisa criar o arquivo `.env` para que a aplicação possa rodar sem problemas.

PROD: `yarn ios` o `yarn android`

Crie o arquivo .env na raiz de seu projeto com as variáveis:
  - `API_KEY_OPEN_WEATHER` com o valor `2e716a24ce0220ed2ef00a7d546f9af5`

### Outras pastas e arquivos
Caso algumas pasta ou arquivo não foi citado nesse documento, por favor n˜åo alterar, pois fazem parte das configurações para o bom funcionamento do app.

## Contato
Caso tenham algum problema para rodar o app ou algum bug por favor entrar em contato com:
Daniel Morsoleto
dmorsoleto@gmail.om
