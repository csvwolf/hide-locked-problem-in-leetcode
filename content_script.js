(function() {
  let target = null;

  const observer = new MutationObserver((mutations) => {
    clearTimeout(target);
    if (document.querySelector('.table-responsive')) {
      target = setTimeout(() => {
        const trs = document.querySelectorAll('.reactable-data tr');
        for (let i = 0; i < trs.length; i++) {
          if (trs[i].querySelector('.fa-lock')) trs[i].style.display = 'none';
        }
      }, 100);
    }
  });

  const config = {
    childList: true,
    subtree: true
  };

  observer.observe(document.querySelector('body'), config);
})();