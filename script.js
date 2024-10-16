    window.addEventListener('scroll', function() {
        // Get the position of the Skills section
        const skillsSection = document.querySelector('#skills');
        const aboutSection = document.querySelector('#aboutme');

        const nav = document.querySelector('nav');
        const navLinks = document.querySelectorAll('nav a');

        
        const section1Position = aboutSection.getBoundingClientRect().top;
        const section2Position = skillsSection.getBoundingClientRect().top;

        // Change color when the section is in view
        if (section1Position <= window.innerHeight / 10) {
             // Change navbar background
            navLinks.forEach(link => link.style.color = '#146ef5'); // Change link color
        } 
        
        else if (section2Position <= window.innerHeight / 10) {
            // Change navbar background
           navLinks.forEach(link => link.style.color = '#146ef5'); // Change link color
       } 
       
        else {
            nav.style.backgroundColor = 'transparent'; // Revert to original
            navLinks.forEach(link => link.style.color = 'white'); // Revert link color
        }
    });

