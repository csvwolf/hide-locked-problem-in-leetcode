var trs = document.querySelectorAll('.reactable-data tr');

for (var i = 0; i < trs.length; i++) {
  if (trs[i].querySelector('.fa-lock')) trs[i].remove();
}
