
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showDetails(title, description) {
    document.getElementById('detail-title').innerText = title;
    document.getElementById('detail-description').innerText = description;
}

document.addEventListener('DOMContentLoaded', () => {
    const animatedNumbers = document.querySelectorAll('.leetcode_animated-number');
    const animatedNumbersGfg = document.querySelectorAll('.GfG_animated-number');
    const educationSection = document.getElementById('skills');

    const resetNumbers = () => {
        animatedNumbers.forEach(num => {
            num.textContent = '1';
        });
        animatedNumbersGfg.forEach(num =>{
            num.textContent = '1'
        });
    };

    const animateNumbers = () => {
        animatedNumbers.forEach(num => {
            const target = +num.getAttribute('data-target');
            const updateCount = () => {
                const count = +num.textContent;
                const increment = target / 200;

                if (count < target) {
                    num.textContent = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    num.textContent = target;
                }
            };
            updateCount();
        });
        animatedNumbersGfg.forEach(num =>{
            const target = +num.getAttribute('data-target');
            const updateCount = () => {
                const count = +num.textContent;
                const increment = target / 300;

                if (count < target) {
                    num.textContent = Math.ceil(count + increment);
                    setTimeout(updateCount, 10);
                } else {
                    num.textContent = target;
                }
            };
            updateCount();
        }
            
        )
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetNumbers();
                animateNumbers();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(educationSection);
});






