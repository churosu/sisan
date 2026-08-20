/* Mirai Shishin — Google Analytics 4（全ページ共通）
   使い方：下の GA_MEASUREMENT_ID を、ご自身の「測定ID」（G-から始まる文字列）に書き換えるだけ。
   これ1ファイルを直せば、トップ・シミュレーター・全コラムページにまとめて反映されます。
   ※ 未設定（G-XXXXXXXXXX のまま）のあいだは計測しません（このまま公開しても無害です）。 */
(function () {
  var GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ← ここをご自身の測定IDに置き換えてください

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.indexOf("XXXX") !== -1) return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
})();
