# Store Manager

<p>O projeto Store Manager consiste em uma API de gerenciamento de vendas, desenvolvida para aplicar o aprendizado sobre arquitetura em camadas e a aplicação de padrões REST. Este projeto permite que você utilize conceitos de normalização de dados e crie uma aplicação robusta e escalável.</p>

<h3>O que foi feito?</h3>
<p>Neste projeto, foram aplicados conhecimentos adquiridos para construir uma API seguindo a arquitetura em camadas (Model-Service-Controller) e os princípios do REST. O foco principal foi modelar um banco de dados utilizando MySQL e implementar as funcionalidades necessárias para gerenciar vendas e produtos.</p>

<h3>Objetivos do Projeto</h3>
<ul>
    <li>Estruturar a aplicação em camadas: Models, Services e Controllers.</li>
    <li>Delegar responsabilidades corretamente entre as camadas.</li>
    <li>Aplicar os padrões REST na construção da API.</li>
    <li>Conectar a aplicação a um banco de dados MySQL.</li>
    <li>Escrever testes unitários para garantir a qualidade da aplicação.</li>
</ul>

<h3>Estrutura do Banco de Dados</h3>
<p>O banco de dados é composto por três tabelas principais:</p>
<ul>
    <li><strong>products:</strong> Armazena informações sobre os produtos.</li>
    <li><strong>sales:</strong> Registra as vendas realizadas.</li>
    <li><strong>sales_products:</strong> Relaciona produtos às vendas, incluindo a quantidade vendida.</li>
</ul>

<h3>Dicas Importantes</h3>
<p>É importante observar que a tabela <strong>products</strong> não possui mais a coluna <strong>quantity</strong>, que foi movida para a tabela <strong>sales_products</strong>.</p>
