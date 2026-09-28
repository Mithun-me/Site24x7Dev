/* Mobile Docs Review — shared helper for the full audit page.
   Renders copy fixes as before → after pairs. rows = [[fix, index], ...];
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
