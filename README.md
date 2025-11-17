# Convite Jess e WG

## Descrição do Projeto

Este repositório contém o convite de casamento de Jess e WG. É um projeto estático, desenvolvido com HTML e CSS, e inclui uma página principal para o convite e uma página separada para a lista de presentes. O objetivo é proporcionar uma experiência simples e elegante para os convidados.

## Estrutura do Projeto

O convite está localizado na pasta `src/convite/` e contém os seguintes arquivos:

- `convite.html`: A página principal do convite.
- `convite.css`: O arquivo de estilos para o convite.
- `lista-presentes.html`: Uma página dedicada à lista de presentes.
- `jess.png`, `jessw.png`, `jesswg1.png`, `jesswg2.png`, `teste1.png`: Imagens utilizadas no design do convite.

## Como Visualizar

Para visualizar o convite, basta abrir o arquivo `src/convite/convite.html` em seu navegador web. A página da lista de presentes pode ser acessada através de um link no convite principal ou diretamente abrindo `src/convite/lista-presentes.html`.

## Prévia do Convite

Aqui você pode adicionar as imagens de prévia do convite para facilitar a visualização sem precisar abrir o projeto.

### Página Principal do Convite

![Prévia da Página Principal do Convite](<src/convite/Convite.png>)

### Página da Lista de Presentes

![Prévia da Página da Lista de Presentes](<caminho/para/imagem_lista_presentes.png>)

## Tecnologias Utilizadas

- HTML5
- CSS3

## Changelog

### [2025] - Lista de Presentes - Link

#### Adicionado
- Arquivo `src/lista-presentes-link.html`: Nova página para lista de presentes com link direto para o Mercado Livre
- Arquivo `src/lista-presentes-link.css`: Arquivo CSS separado para melhor organização do código
- Ícone do Mercado Livre (`meli.png`) na mensagem informativa
- Meta tag viewport para responsividade em dispositivos móveis
- Layout responsivo com media queries para tablets (768px) e mobile (480px)
- Uso de `clamp()` para tamanhos de fonte e padding responsivos

#### Modificado
- Separação do CSS inline para arquivo externo (`lista-presentes-link.css`)
- Estrutura HTML reorganizada para layout sequencial e fluido
- Removidas sobreposições de elementos (margin negativo)
- Centralização de todos os elementos com alinhamento consistente
- Botões e links ajustados para serem responsivos:
  - Padding adaptativo usando `clamp()`
  - Largura máxima de 600px
  - Tamanhos de fonte responsivos
- Espaçamentos entre elementos padronizados (30px entre seções)
- Card principal agora usa `flex-direction: column` para layout vertical natural
- Removida altura fixa do card para permitir crescimento dinâmico baseado no conteúdo

#### Melhorias de UX/UI
- Layout sequencial: cada elemento aparece após o anterior sem sobreposições
- Todos os elementos centralizados e alinhados
- Botões com tamanhos apropriados para diferentes tamanhos de tela
- Texto informativo com ícone do Mercado Livre integrado
- Melhor legibilidade em dispositivos móveis

#### Arquivos Afetados
- `src/lista-presentes-link.html`
- `src/lista-presentes-link.css` (novo)
- `meli.png` (utilizado como ícone)

## Contato

Para qualquer dúvida ou sugestão, por favor, entre em contato.
