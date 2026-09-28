/* Mobile Docs Review — shared shell: theme toggle and copy-fix list.
   Loaded in <head> so the saved theme applies before first paint. */
(function () {
  var KEY = "mdr-theme", order = ["system", "light", "dark"];
  function read() { try { return localStorage.getItem(KEY) || "system"; } catch (e) { return "system"; } }
  function apply(mode) {
    var root = document.documentElement;
    if (mode === "system") root.removeAttribute("data-theme"); else root.setAttribute("data-theme", mode);
  }
  var ICONS = {
    system: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>'
  };
  apply(read());
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme");
    if (!btn) return;
    function paint(mode) {
      btn.innerHTML = ICONS[mode];
      btn.setAttribute("aria-label", "Theme: " + mode + ". Switch theme");
      btn.title = "Theme: " + mode;
    }
    var mode = read(); paint(mode);
    btn.addEventListener("click", function () {
      mode = order[(order.indexOf(mode) + 1) % order.length];
      apply(mode); paint(mode);
      try { localStorage.setItem(KEY, mode); } catch (e) {}
    });
  });
})();

/* Renders copy fixes as before → after pairs. rows = [[fix, index], ...];
   fix = [page, platform, current, suggested, origin?]. Uses the page's esc() and pill(). */
function fixList(rows) {
  return '<ol class="fixes">' + rows.map(function (r) {
    var f = r[0], i = r[1];
    var origin = f[4] ? '<span class="origin' + (f[4] === "New" ? " new" : "") + '">' + esc(f[4]) + "</span>" : "";
    return '<li class="fix"><div class="fix-meta"><b>' + esc(f[0]) + "</b>" + pill(f[1]) + origin + "</div>" +
      '<div class="fix-diff"><del>' + esc(f[2]) + '</del><span class="arrow" aria-label="becomes">→</span><ins>' + esc(f[3]) + "</ins></div>" +
      '<button class="copy" data-i="' + i + '" type="button">Copy fix</button></li>';
  }).join("") + "</ol>";
}
