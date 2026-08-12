(function () {
  function initCopyButtons() {
    const codeBlocks = document.querySelectorAll('div.highlighter-rouge, figure.highlight, pre.highlight, pre:not(.highlight)');

    codeBlocks.forEach(function (block) {
      if (block.tagName.toLowerCase() === 'pre' && block.closest('div.highlighter-rouge')) {
        return;
      }
      if (block.querySelector('.copy-code-button') || (block.parentNode && block.parentNode.classList.contains('code-block-wrapper'))) {
        return;
      }

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      block.parentNode.insertBefore(wrapper, block);
      wrapper.appendChild(block);

      const button = document.createElement('button');
      button.className = 'copy-code-button';
      button.type = 'button';
      button.setAttribute('aria-label', 'Copy code to clipboard');

      const copyIcon = '<svg class="copy-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
      const checkIcon = '<svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

      button.innerHTML = copyIcon + '<span>Copy</span>';

      button.addEventListener('click', function () {
        const codeElement = wrapper.querySelector('code') || wrapper.querySelector('pre');
        const textToCopy = codeElement ? codeElement.innerText : wrapper.innerText;

        function setCopied() {
          button.innerHTML = checkIcon + '<span>Copied!</span>';
          button.classList.add('copied');
          setTimeout(function () {
            button.innerHTML = copyIcon + '<span>Copy</span>';
            button.classList.remove('copied');
          }, 2000);
        }

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(textToCopy).then(setCopied).catch(function () {
            fallbackCopy(textToCopy, setCopied);
          });
        } else {
          fallbackCopy(textToCopy, setCopied);
        }
      });

      wrapper.appendChild(button);
    });
  }

  function fallbackCopy(text, callback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      callback();
    } catch (err) {
      console.error('Copy failed: ', err);
    }
    textArea.remove();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCopyButtons);
  } else {
    initCopyButtons();
  }
})();
