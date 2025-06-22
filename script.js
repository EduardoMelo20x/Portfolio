document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Navegação entre seções
    const navLinks = document.querySelectorAll('.sidebar nav a');
    const sections = document.querySelectorAll('.section');
    
    // Definir a seção inicial como ativa
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
    
    // Definir o primeiro link como ativo
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove classe active de todos os links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Adiciona classe active ao link clicado
            this.classList.add('active');
            
            // Obtém o id da seção a ser mostrada
            const targetId = this.getAttribute('href');
            
            // Esconde todas as seções
            sections.forEach(section => section.classList.remove('active'));
            
            // Mostra a seção alvo
            document.querySelector(targetId).classList.add('active');
            
            // Fecha o menu em dispositivos móveis
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Scroll suave para links internos
    // Animação de digitação para o texto de boas-vindas (opcional)
    // ...
});