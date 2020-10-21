<h1>Api Delivery</h1>
<hr>
<p>Api delivery retorna receitas e os gifs relacionados passando os ingredientes por parametros na url</p>

<i><b>Summary</b></i>
<ul>
    <li><a href="#feature">Features</a></li>
    <li><a href="#arq">Arquitetura</a></li>
    <li><a href="#amb">Configurando o ambiente e subindo a aplicação</a></li>
    <li><a href="#pcus">Pacotes Usados</a></li>
    <li><a href="#end">EndPoints</a></li>
    <li><a href="#func">Funções Logicas</a></li>
</ul>
<hr>
<h2><a name="feature">Features</a></h2>
<span>
    A organização do código foi baseada no MVC porem ultilizado
    o melhor forma de desacoplamento das funcionalidades, visando a
    simplicidade na hora de encontar as suas respectivas funções.
</span><br>
<b>Preparado para testes</b>
<p>
    Foi usado jest como framework para realizar essa tarefa. Tanto para os unitários como para os de integração,
    Testando
    o aquivo de logica das funções responsáveis por fazer com que aconteça a integração das apis externas.
</p>
<b>Linter</b>
<p>Para code styling foi usado <a href="https://eslint.org/">eslint</a>.</p>
<hr>
<h2 name="arq"> Arquitetura </h2>

<h2><a name="amb">Configurando o ambiente e rodando a aplicação</a></h2>
<p>
Depois de criar um gitclone  é só ultilizar o gerenciandor de pacotes de sua preverência.
</p>
<code>npm install</code>
<br>
<code>yarn</code>
<p>
Dessa forma ele irá instalar os pacotes necessários para qua a plicação funcione normalmete.
</p>
<i>Obs: Foi criado uma conexão com o docker caso necessite esse tipo de integração, os arquivos estão dispostos na raíz do projeto.</i><br>
<b>Para o Docker</b><br>
<code>
docker-compose up
</code>
<p>

<h2>Teste</h2>
Como informado foi ultilizado o jest para os tests unitário e de integração.
Para rodar os testes local será necessário 
rodar o comando:<br>
<code>npm run test</code><br>
ou</br>
<code>npm run test:ci</code><br>
Para o coverage
<hr>

<h2><a  name="pcus">Pacotes Usados</a></h2>
Em resumo...
<table class="table">
  <thead>
    <tr>
      <th scope="col">Nome do Pacote</th>
      <th scope="col">Finalidade</th>
      <th scope="col">Link Documentação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jest</th>
      <td>Testes</td>
      <td><a href="https://jestjs.io/docs/en/getting-started">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Eslint</th>
      <td> Irá olhar o seu código e vai te acusar os erros baseados na regra que você definir</td>
      <td><a href="https://eslint.org/">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Prettier</th>
      <td>O Prettier é um code formatter livre (MIT) e de código aberto, que tem por finalidade "forçar" um padrão de código.</td>
      <td><a href="https://prettier.io/">Link</a></td>
    </tr>
    <tr>
      <th scope="row">@hapi/joi</th>
      <td>Joi: Esse pacote é usado para validar e retornar erros de validação de forma automatizada</td>
      <td><a href="https://hapi.dev/module/joi">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Body-Parser</th>
      <td>O body-parser é um módulo capaz de converter o body da requisição para vários formatos. Um desses formatos é json</td>
      <td><a href="https://www.npmjs.com/package/body-parser">Link</a></td>
    </tr>
    <tr>
      <th scope="row">cors</th>
      <td>Cross-origin resource sharing (CORS ou compartilhamento de recursos de origem cruzada) é uma especificação de uma tecnologia de navegadores que define meios para um servidor permitir que seus recursos sejam acessados por uma página web de um domínio diferente</td>
      <td><a href="https://www.npmjs.com/package/cors">Link</a></td>
    </tr>
    <tr>
      <th scope="row">supertest</th>
      <td>Basicamente o Supertest é um módulo que forja requisições visando testar webservers em Node. js e verifica o retorno das mesmas para automatizar testes deste tipo de infraestrutura, principalmente web APIs</td>
      <td><a href="https://www.npmjs.com/package/supertest">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Express.js</th>
      <td>Express.js é um framework para aplicações web para Node.js, lançado como software livre e de código aberto sob a Licença MIT...</td>
      <td><a href="https://www.npmjs.com/package/express">Link</a></td>
    </tr>
    <tr>
      <th scope="row">Axios</th>
      <td>Axios é um cliente HTTP, que funciona tanto no browser quanto em node. js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor.</td>
      <td><a href="https://www.npmjs.com/package/axios">Link</a></td>
    </tr>
  </tbody>
</table>
<hr>
<h2><a name="end">Endpoints</a></h2>
<p>A aplicaçõs só possui um endpoine de entrada que roda toda a aplicação ex:</p><br>
<code>
http://localhost:3000/recipes/?i=tomato,radish,onion
</code>
<hr>
<p>Retorno deve aparecer dessa forma:</p>
<img src="https://user-images.githubusercontent.com/29145254/96767004-4d7bd680-13b2-11eb-861f-33ff6ace7098.PNG" />
<hr>
<h2><a name="func">Funções Lógicas</a></h2>
<code>src/utils/logicFunctions.js</code>
<br>
<b>limitApiRecipe</b>
<br>
<p>
Função responsável por receber o resultado da requisição da api Recipe e tranformar em duas requisições apenas.
</p>
<br>
<b>convertString</b>
<br>
<p>
Função responsável por receber os ingredientes que vem da url.
</p>
<code>src/service/contractReturn/contractReturn.js</code>
<br>
<b>contractReturn</b>
<p>
Essa funcão é responsável por pegar as informações transformar no objeto final
</p>
