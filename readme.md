# Tarefas em background utilizando Node.js e Redis

Laboratório da DIO sobre uso de tarefas assíncronas em Node utilizando Redis

## Baixar e instalar o projeto

Faça o download do pacote do github ou clone o repositório.

Em seguida, digite `npm install` ou `yarn install`. Dessa forma, todas as dependências do projeto serão instaladas.

## Requisitos do Lab:

* Ter instalado Node.js. O lab utiliza a versão 10 do Node, portanto deve ser usada essa versão ou superior

* Ter instalado o Redis. Para uso durante o lab, será usado o Redis com Docker (recomendado). Você pode instalar uma imagem do Redis usando o seguinte comando em seu terminal (deve possui o Docker instalado):
  `docker run --name redis -p 6379:6379 -d -t redis:alpine`

Para subir sua instância local do redis, você pode executar o comando `docker start redis`. Lembrando que `redis` é o nome da imagem criada anteriormente. Para verificar o status das imagens em execução, execute o comando `docker ps` para as imagens em execução ou `docker ps -a` para listar todas as imagens, inclusive as paradas.

* Dependencias a ser instaladas: `express nodemailer dotenv password-generator`

* Dependências de desenvolvimento: `nodemon sucrase`

O arquivo `nodemon.json` inclui instruções para permitir a execução do nodemon com a sintaxe de import / export, disponível a partir da versão 12 do Node.js.

Para a simulação do envio dos e-mails, será utilizado o serviço gratuíto do https://mailtrap.io. Será necessário criar uma conta e um projeto para atribuir uma mailbox para esse projeto. Atenção! Preencha os dados da conexão com suas credenciais. Credenciais e configurações da api do mailtrap estão no arquivo .env, não incluso no repositório do github.

Para a criação das filas de tarefas em background, será utilizada a biblioteca Bull (https://github.com/OptimalBits/bull). Essa biblioteca permite tratar o envio de mensagens e fazer o trace de possíveis erros, sem onerar sua aplicação.

Para adicionar a biblioteca ao seu projeto, digite `yarn add bull`.

Para visualizar o status das filas e os resultados das chamadas, será incluída a biblioteca `bull-board`.

Além do Bullboard como interface gráfica, é interessante implementar uma ferramenta de monitoramento do serviço. O exemplo apresentado na aula foi o `https://sentry.io/`.