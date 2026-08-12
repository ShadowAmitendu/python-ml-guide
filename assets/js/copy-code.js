document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('div.highlighter-rouge, pre');

  codeBlocks.forEach((block) => {
    // If this is a pre element inside a highlighter-rouge wrapper, skip it
    if (block.tagName.toLowerCase() === 'pre' && block.closest('div.highlighter-rouge')) {
      return;
    }
    // Prevent duplicate wrapping
    if (block.parentNode && block.parentNode.classList && block.parentNode.classList.contains('code-block-wrapper')) {
      return;
    }

    // Create container wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    button.innerText = 'Copy';

    button.addEventListener('click', async () => {
      const codeElement = wrapper.querySelector('code') || wrapper.querySelector('pre');
      const textToCopy = codeElement ? codeElement.innerText : wrapper.innerText;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        button.innerText = 'Copied!';
        button.classList.add('copied');

        setTimeout(() => {
          button.innerText = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
        button.innerText = 'Failed';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      }
    });

    wrapper.appendChild(button);
  });
});
