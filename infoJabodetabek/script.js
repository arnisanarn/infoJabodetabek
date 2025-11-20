AOS.init();
function goToRandomPage() {
  // List of pages you want to navigate to
  const pages = [
    "jakarta.html",
    "bogor.html",
    "depok.html",
    "tangerang.html",
    "bekasi.html",
  ];
  const randomIndex = Math.floor(Math.random() * pages.length);

  window.location.href = pages[randomIndex];
}
