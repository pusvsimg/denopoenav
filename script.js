// script.js
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      const targetId = this.getAttribute("href").split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });

        const newUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "#" +
          targetId;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }
    });
  });

  function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        const activeLink = document.querySelector(
          'nav a[href="' + hash + '"]'
        );
        if (activeLink) {
          navLinks.forEach((l) => l.classList.remove("active"));
          activeLink.classList.add("active");
        }
      }
    }
  }

  // 动态添加 rel="noopener noreferrer" (如果 HTML 中还没有的话)
  document.querySelectorAll('.link-card a').forEach(link => {
    if (link.target === '_blank') {
      link.rel = 'noopener noreferrer';
    }
  });

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange(); // 初始加载时调用

  // 将链接标题截断为最大行数的函数.
  function clampLinkTitle(element, maxLines) {
    const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
    const maxHeight = lineHeight * maxLines;

    if (element.scrollHeight > maxHeight) {
        element.style.height = maxHeight + 'px';
        element.style.overflow = 'hidden';
        element.style.textOverflow = 'ellipsis';
        element.style.display = '-webkit-box';
        element.style.webkitLineClamp = maxLines;
        element.style.webkitBoxOrient = 'vertical';
    }
  }

  // 将行截断应用于所有链接卡标题。
    document.querySelectorAll('.link-card h3').forEach(h3 => {
      clampLinkTitle(h3, 2);
    });
});
