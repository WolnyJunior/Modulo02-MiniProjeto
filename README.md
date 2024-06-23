# Mini Projeto - Módulo 2 - Floripa Mais Tec

## Indice

- [Indice](#indice)
- [Objetivo](#objetivo)
- [Desenvolvimento](#desenvolvimento)

## Objetivo

<p>Desenvolver uma página que possa ser utilizada para adicionar tarefas e hobbies, sendo possível armazenar os dados para ter acesso a qualquer momento.</p>

## Desenvolvimento

<p>Foram desenvolvidas algumas funções e eventos para realizar a inserção de elementos em uma lista que serve para armazenar tarefas, interesses e hobbies.</p>
<p>Na função de adicionar elementos à lista no DOM é utilizado uma lista desordenada(ul) vazia, através do ID, que receberá os elementos(li) criados.</p>
<p>Na função de adicionar tarefa, é feita a captura do valor do input para adicionar ao elemento criado. A função tem uma condicional que faz uma verificação na lista armazenada no localStorage, adiciona o novo elemento à lista e atualiza. Limpa o campo do input e atualiza o DOM.</p>
<p>Na função de limpar lista, é feita a remoção dos elementos na DOM e no localStorage.</p>
<p>Foi implantada uma função setInterval que faz a atualização da função de adicionar elementos a cada 1s.</p>
<p>Foi criada uma função para fazer uma requisição na API do IBGE, trazendo informações sobre a última notícia postada.</p>

- [Indice](#indice)
