(function () {
  const data = {
    rightArrow: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" width="24" height="24">
        <path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"/>
      </svg>
    `,
  };

  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = data[el.dataset.icon];
  });
})();