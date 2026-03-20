function toggleTheme() {
    document.body.classList.toggle('theme-light');
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerText = document.body.classList.contains('theme-light') ? 'dark_mode' : 'light_mode';
    }
}

document.addEventListener('mousemove', (e) => {
    // Spotlight Effect
    const spotlight = document.getElementById('spotlight');
    if (spotlight) {
        spotlight.style.setProperty('--x', e.clientX + 'px');
        spotlight.style.setProperty('--y', e.clientY + 'px');
    }
});

// Glow Card effect
document.querySelectorAll('.glow-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Intersection Observer for fade-up animations & timeline progress
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // if it's the workflow grid, animate the line
            if(entry.target.id === 'workflow-grid') {
                const progress = document.getElementById('workflow-progress');
                if(progress) {
                    progress.classList.add('workflow-line-active');
                }
            }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up, #workflow-grid').forEach((el) => observer.observe(el));

// Role Switcher for Experience Section
function switchRole(roleId) {
    // Hide all details
    document.querySelectorAll('.role-detail').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('opacity-100');
    });
    
    // Show selected detail with fade in
    const target = document.getElementById(roleId);
    if(target) {
        target.classList.remove('hidden');
        setTimeout(() => {
            target.classList.add('opacity-100');
        }, 50);
    }

    // Update sidebar active state
    document.querySelectorAll('.role-tab').forEach(el => {
        el.classList.remove('border-l-primary', 'text-on-surface');
        el.classList.add('border-l-transparent', 'text-on-surface/50');
        // Remove indicator dot
        const dot = el.querySelector('.indicator-dot');
        if(dot) dot.remove();
    });

    const activeTab = document.querySelector(`[onclick="switchRole('${roleId}')"]`);
    if(activeTab) {
        activeTab.classList.remove('border-l-transparent', 'text-on-surface/50');
        activeTab.classList.add('border-l-primary', 'text-on-surface');
        activeTab.innerHTML = '<span class="w-2 h-2 rounded-full bg-primary indicator-dot absolute -left-[5px] top-1/2 -translate-y-1/2"></span>' + activeTab.innerHTML;
    }
}
