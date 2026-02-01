/**
 * Hacker Theme Effects
 * Terminal-style animations and interactive elements
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    initTypingEffect();
    initGlitchEffect();
    initConsoleEasterEgg();
    initScrollReveal();
  });

  /**
   * Typing effect for the main title
   */
  function initTypingEffect() {
    const titles = document.querySelectorAll('.page-heading h1, .intro-header h1');

    titles.forEach(function(title) {
      const text = title.textContent;
      if (text && text.length > 0) {
        title.setAttribute('data-text', text);
      }
    });
  }

  /**
   * Random glitch effect on hover for headings
   */
  function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('h1, h2, .post-title');

    glitchElements.forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        this.classList.add('glitch-active');

        setTimeout(function() {
          el.classList.remove('glitch-active');
        }, 200);
      });
    });
  }

  /**
   * Console easter egg
   */
  function initConsoleEasterEgg() {
    const styles = [
      'color: #00ff41',
      'font-size: 14px',
      'font-family: monospace',
      'text-shadow: 0 0 10px #00ff41'
    ].join(';');

    const asciiArt = [
      '',
      '  _    _            _             ',
      ' | |  | |          | |            ',
      ' | |__| | __ _  ___| | _____ _ __ ',
      ' |  __  |/ _` |/ __| |/ / _ \\ \'__|',
      ' | |  | | (_| | (__|   <  __/ |   ',
      ' |_|  |_|\\__,_|\\___|_|\\_\\___|_|   ',
      '',
      ' Welcome to John\'s digital realm.',
      ' Explore. Learn. Build.',
      ''
    ].join('\n');

    console.log('%c' + asciiArt, styles);
    console.log('%c> Access granted. Feel free to poke around.', styles);
    console.log('%c> Check out my GitHub: https://github.com/lauronjohn', styles);
  }

  /**
   * Scroll reveal animation for post previews
   */
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe post previews
    const posts = document.querySelectorAll('.post-preview');
    posts.forEach(function(post, index) {
      post.style.opacity = '0';
      post.style.transform = 'translateX(-20px)';
      post.style.transition = 'opacity 0.5s ease ' + (index * 0.1) + 's, transform 0.5s ease ' + (index * 0.1) + 's';
      observer.observe(post);
    });
  }

  // Add revealed class styles dynamically
  const style = document.createElement('style');
  style.textContent = [
    '.post-preview.revealed {',
    '  opacity: 1 !important;',
    '  transform: translateX(0) !important;',
    '}',
    '.glitch-active {',
    '  animation: glitch-effect 0.2s ease !important;',
    '}',
    '@keyframes glitch-effect {',
    '  0% { transform: translate(0); }',
    '  20% { transform: translate(-2px, 2px); }',
    '  40% { transform: translate(-2px, -2px); }',
    '  60% { transform: translate(2px, 2px); }',
    '  80% { transform: translate(2px, -2px); }',
    '  100% { transform: translate(0); }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

})();
