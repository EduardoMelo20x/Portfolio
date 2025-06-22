-- EXPLICAÇÃO DA ESTRUTURA DO CODIGO:-- 




mudancas:
 ADICIONAR SOBRE O MENU TOGGLE ANTES DA SIDEBAR
 CRIADO A DIV CONTEINER ONDE ESTA A DIV SIDEBAR E TAMBEM O MAIN QUE TERA O CONTEUDO PRINCIPAL
 ANCORA DO BOTAO DO WHATS FLUTUANTE
 LINK DO JAVASCRIPT



<!DOCTYPE html>: Não é uma tag HTML, mas uma "declaração de tipo de documento" que informa ao navegador qual versão do HTML está sendo usada (neste caso, HTML5). Sem esta declaração, alguns navegadores podem entrar em "modo quirks" e renderizar a página de forma inconsistente.

<html lang="pt-br">: É o elemento raiz que envolve todo o conteúdo HTML. O atributo lang="pt-br" especifica o idioma do conteúdo, o que ajuda:

    • Leitores de tela para deficientes visuais a usar a pronúncia correta

    • Ferramentas de tradução a aplicar regras corretas

    • Mecanismos de busca a identificar o idioma do conteúdo

<head>: Contém metadados (dados sobre dados) e links para recursos externos. O conteúdo dentro desta tag não é visível na página, mas fornece informações importantes para o navegador e mecanismos de busca.

<body>: Contém todo o conteúdo visível da página web, como textos, imagens, links, tabelas, etc.



METADADOS E LINKS NO <head>:

----------------------------------------------------------------------------------------------------------
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="short icon" href="..." type="image\x-icon">
<title>Portfolio - Eduardo Melo</title>
<link rel="stylesheet" type="text/css" href="styles.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

----------------------------------------------------------------------------------------------------------

<meta charset="UTF-8">: Define a codificação de caracteres do documento como UTF-8, que suporta praticamente todos os caracteres e símbolos do mundo. Sem esta tag, caracteres especiais (como acentos) podem aparecer incorretamente.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Esta meta tag é crucial para responsividade:

    • width=device-width: Faz a largura da página seguir a largura do dispositivo

    • initial-scale=1.0: Define o nível de zoom inicial quando a página é carregada

    • Sem esta tag, sites em dispositivos móveis seriam renderizados como em desktop, exigindo zoom

<link rel="short icon" href="..." type="image\x-icon">: Define o favicon (ícone pequeno que aparece na aba do navegador). 

<title>Portfolio - Eduardo Melo</title>: Define o título da página que aparece:

    • Na aba/janela do navegador

    • Nos resultados de pesquisa

    • Nos favoritos quando a página é salva

    • Em históricos de navegação

<link rel="stylesheet" type="text/css" href="styles.css">: Vincula um arquivo CSS externo ao documento HTML:

    • rel="stylesheet": Define a relação do arquivo vinculado como uma folha de estilo

    • type="text/css": Especifica o tipo de mídia (opcional em HTML5)

    • href="styles.css": Caminho para o arquivo CSS

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">: Importa a biblioteca Font Awesome de um CDN (Content Delivery Network), permitindo o uso de ícones sem precisar baixá-los.



ESTRUTURA DA SIDEBAR:

-----------------------------------------

<div class="sidebar">
    <div class="profile">
        <!-- Conteúdo do perfil -->
    </div>
    <div class="lista-atalhos">
        <!-- Menu de navegação -->
    </div>
    <div class="botao-contato">
        <!-- Botão de WhatsApp -->
    </div>
    <div class="redes-sociais">
        <!-- Ícones de redes sociais -->
    </div>
</div>

-----------------------------------------

<div class="sidebar">: Cria um contêiner para a barra lateral. A tag <div> (divisão) é um contêiner genérico que agrupa elementos relacionados. O atributo class="sidebar" associa este elemento a regras CSS específicas definidas para a classe "sidebar".

Divisão em seções: A sidebar está organizada em seções lógicas (profile, lista-atalhos, botao-contato, redes-sociais), o que facilita:

    • Estilização independente de cada seção

    • Manutenção e atualização do código

    • Compreensão da estrutura do documento

SEÇÃO DE PERFIL:

----------------------------------------------

<div class="profile">
    <img src="..." alt="Eduardo Melo">
    <h2 class="nome-perfil">Eduardo Melo</h2>
</div>

----------------------------------------------

<img src="..." alt="Eduardo Melo">: Insere uma imagem:

src="...": URL da imagem (fonte)

alt="Eduardo Melo": Texto alternativo que: 

    • É exibido se a imagem não carregar

    • É lido por leitores de tela para acessibilidade

    • Ajuda em SEO (otimização para mecanismos de busca)

<h2 class="nome-perfil">Eduardo Melo</h2>: Cria um cabeçalho de nível 2:

    • Os cabeçalhos vão de <h1> (mais importante) a <h6> (menos importante)

    • Ajudam a estruturar o conteúdo hierarquicamente

    • São importantes para SEO e acessibilidade

    • A classe nome-perfil permite estilização específica via CSS



MENU DE NAVEGAÇÃO:

---------------------------------------------------------

<div class="lista-atalhos">
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mim">Sobre Mim</a></li>
            <li><a href="#resuno">Resumo</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
</div>

---------------------------------------------------------

<nav>: Tag semântica que define explicitamente uma seção de navegação. Tags semânticas ajudam:

    • Navegadores e leitores de tela a entender a estrutura da página

    • Mecanismos de busca a indexar melhor o conteúdo

    • Desenvolvedores a manter código mais organizado

<ul>: Cria uma lista não ordenada (com marcadores). Alternativas incluem:

    <ol>: Lista ordenada (com números)

    <dl>: Lista de definições

    <li>: Define cada item da lista.

<a href="#inicio">Inicio</a>: Cria um link de âncora:

    href="#inicio": O símbolo # indica que é um link interno para um elemento com id="inicio" na mesma página

    Estes links internos permitem navegação de uma página única (SPA - Single Page Application)

    Quando clicados, o navegador rola até o elemento com o ID correspondente



BOTÃO DE CONTATO:

Continuar escrevendo o material que esta na manus ia