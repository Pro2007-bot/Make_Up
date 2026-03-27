// Navbar scroll
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Add to cart feedback
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        this.textContent = '✓';
        this.style.background = '#4caf50';
        setTimeout(() => {
          this.textContent = '+';
          this.style.background = '';
        }, 1500);
      });
    });

    // Book button
    document.querySelector('.btn-book').addEventListener('click', function() {
      this.textContent = '✓ Appointment Requested!';
      this.style.background = '#4caf50';
      setTimeout(() => {
        this.textContent = 'Book My Appointment';
        this.style.background = '';
      }, 3000);
    });