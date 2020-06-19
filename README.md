> Desafio final da Aceleração Dev de Java da Codenation.

# Central de Erros - Back-end (API)

API Rest para centralizar registros de erros de aplicações.

## Tecnologia

- [Java](https://www.oracle.com/technetwork/java/javase/downloads/index.html) ```1.8```
- [Spring Boot](https://spring.io/projects/spring-boot) ```2.3.0.RELEASE```
- [Maven](https://maven.apache.org/) ```4.0.0```
- [H2](http://h2database.com/html/main.html) ```1.4.200``` 
- [Swagger](https://swagger.io/) ```2.9.2```

## Instalação (para o back-end)

A aplicação foi configurada pra ser executada com o Maven, portanto será necessário a instalação dessa ferramenta. 

> Instalando o Maven: [https://maven.apache.org/install.html](https://maven.apache.org/install.html).

### Clonando o repositório:

```bash
$ git clone https://github.com/mdcj1234/Projeto-AceleraDev-Java.git
```

### Compilando o back-end e empacotando a aplicação

```bash
$ cd Projeto-AceleraDev-Java/back-end
$ mvn compile
$ mvn package
```

### Executando a aplicação

```bash
$ cd Projeto-AceleraDev-Java/back-end
$ mvn spring-boot:run
```

## Endpoints

Após executar a aplicação, você pode acessar a documentação da API, contendo os endpoints implementados, no endereço ```http://localhost:8080/swagger-ui.html```.

## Diagramas

Representação visual das classes da aplicação e das tabelas do banco de dados.

#### Banco de Dados
<img src="https://github.com/mdcj1234/Projeto-AceleraDev-Java/blob/master/back-end/src/main/resources/assests/diagrama-er.jpg" alt="Imagem representando as tabelas do banco de dados">

## Desvolvedor

- [Márcio Junior](https://www.linkedin.com/in/marciojr1994/) 

## (Bônus) Front-end

O front-end não era necessário para cumprir os requisitos do projeto. No entanto ele facilita a visualização do projeto como um todo.

## Deploy

Para fins de demonstração de funcionamento, foi feito o deploy da aplicação nas plataformas [Heroku](https://www.heroku.com/) e [Netlify](https://www.netlify.com/).

| Plataforma | Serviço | Link |
| :--- | :--- | :--- |
| Netlify | Front-end | [https://squad-1-front.netlify.com](https://squad-1-front.netlify.com)|
| Heroku | Back-end | *Sem acesso externo* |
| Heroku | Banco de Dados | *Sem acesso externo* |
