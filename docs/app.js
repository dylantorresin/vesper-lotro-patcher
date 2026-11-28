(function () {
  "use strict";

  try {
    // 1. Mobile navigation drawer
    var menuBtn = document.getElementById("mobile-menu-btn");
    var mobileNav = document.getElementById("mobile-nav");
    if (menuBtn && mobileNav) {
      var closeMenu = function () {
        mobileNav.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Apri menu di navigazione");
      };
      menuBtn.addEventListener("click", function () {
        var isOpen = !mobileNav.hidden;
        if (isOpen) {
          closeMenu();
        } else {
          mobileNav.hidden = false;
          menuBtn.setAttribute("aria-expanded", "true");
          menuBtn.setAttribute("aria-label", "Chiudi menu di navigazione");
        }
      });
      var mobileLinks = mobileNav.querySelectorAll("a");
      for (var i = 0; i < mobileLinks.length; i += 1) {
        mobileLinks[i].addEventListener("click", closeMenu);
      }
      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape" && !mobileNav.hidden) {
          closeMenu();
          menuBtn.focus();
        }
      });
    }

    // 2. Patcher interactive module size calculator
    var modInputs = document.querySelectorAll(".js-mod-toggle");
    var summaryEl = document.getElementById("mockup-summary");
    var updateMockupSummary = function () {
      if (!summaryEl) return;
      var totalMb = 38;
      var count = 1;
      for (var j = 0; j < modInputs.length; j += 1) {
        var cb = modInputs[j];
        if (cb.checked) {
          count += 1;
          var mb = Number(cb.getAttribute("data-mb") || "0");
          if (isFinite(mb)) totalMb += mb;
        }
      }
      var sizeLabel =
        totalMb >= 1000
          ? "~" + (totalMb / 1024).toFixed(2).replace(".", ",") + " GB"
          : "~" + Math.round(totalMb) + " MB";
      summaryEl.innerHTML =
        "Pacchetto selezionato: <strong>" +
        count +
        (count === 1 ? " modulo" : " moduli") +
        "</strong> · " +
        sizeLabel;
    };
    for (var k = 0; k < modInputs.length; k += 1) {
      modInputs[k].addEventListener("change", updateMockupSummary);
    }
    updateMockupSummary();

    // 3. Literary canon showcase tabs (Alliata / Principe)
    var tabs = Array.prototype.slice.call(document.querySelectorAll(".showcase-tab"));
    var panels = Array.prototype.slice.call(document.querySelectorAll(".showcase-panel"));
    var activateTab = function (tabBtn) {
      var targetId = tabBtn.getAttribute("aria-controls");
      for (var t = 0; t < tabs.length; t += 1) {
        var isSel = tabs[t] === tabBtn;
        tabs[t].classList.toggle("is-active", isSel);
        tabs[t].setAttribute("aria-selected", isSel ? "true" : "false");
      }
      for (var p = 0; p < panels.length; p += 1) {
        var match = panels[p].id === targetId;
        panels[p].classList.toggle("is-active", match);
        panels[p].hidden = !match;
      }
    };
    for (var tIdx = 0; tIdx < tabs.length; tIdx += 1) {
      (function (idx) {
        tabs[idx].addEventListener("click", function () {
          activateTab(tabs[idx]);
        });
        tabs[idx].addEventListener("keydown", function (ev) {
          if (ev.key === "ArrowRight") {
            ev.preventDefault();
            var next = tabs[(idx + 1) % tabs.length];
            activateTab(next);
            next.focus();
          } else if (ev.key === "ArrowLeft") {
            ev.preventDefault();
            var prev = tabs[(idx - 1 + tabs.length) % tabs.length];
            activateTab(prev);
            prev.focus();
          }
        });
      })(tIdx);
    }

    // 4. Maschile / Femminile live title switch
    var genderBtns = document.querySelectorAll("[data-gender]");
    var genderVals = document.querySelectorAll(".js-gender-val");
    for (var g = 0; g < genderBtns.length; g += 1) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var mode = btn.getAttribute("data-gender") === "f" ? "f" : "m";
          for (var b = 0; b < genderBtns.length; b += 1) {
            var active = genderBtns[b] === btn;
            genderBtns[b].classList.toggle("is-active", active);
            genderBtns[b].setAttribute("aria-pressed", active ? "true" : "false");
          }
          for (var v = 0; v < genderVals.length; v += 1) {
            var text = genderVals[v].getAttribute(mode === "f" ? "data-f" : "data-m");
            if (text) genderVals[v].textContent = text;
          }
        });
      })(genderBtns[g]);
    }

    // 5. Chat commands live search, category filter & 1-click copy
    var cmdSearch = document.getElementById("cmd-search");
    var filterBtns = document.querySelectorAll(".filter-pill");
    var cmdRows = document.querySelectorAll("#cmd-list .cmd-row");
    var cmdCount = document.getElementById("cmd-count");
    var cmdEmpty = document.getElementById("cmd-empty");
    var activeFilter = "all";

    var applyCommandFilters = function () {
      var q = cmdSearch ? cmdSearch.value.trim().toLowerCase() : "";
      var visible = 0;
      for (var r = 0; r < cmdRows.length; r += 1) {
        var row = cmdRows[r];
        var cat = row.getAttribute("data-cat") || "";
        var hay = (row.getAttribute("data-search") || row.textContent || "").toLowerCase();
        var matchCat = activeFilter === "all" || cat === activeFilter;
        var matchQuery = !q || hay.indexOf(q) !== -1;
        var show = matchCat && matchQuery;
        row.hidden = !show;
        if (show) visible += 1;
      }
      if (cmdCount) {
        cmdCount.textContent =
          visible === 1 ? "1 comando visualizzato" : visible + " comandi visualizzati";
      }
      if (cmdEmpty) {
        cmdEmpty.hidden = visible > 0;
      }
    };

    if (cmdSearch) {
      cmdSearch.addEventListener("input", applyCommandFilters);
    }
    for (var f = 0; f < filterBtns.length; f += 1) {
      (function (btn) {
        btn.addEventListener("click", function () {
          activeFilter = btn.getAttribute("data-filter") || "all";
          for (var x = 0; x < filterBtns.length; x += 1) {
            var active = filterBtns[x] === btn;
            filterBtns[x].classList.toggle("is-active", active);
            filterBtns[x].setAttribute("aria-pressed", active ? "true" : "false");
          }
          applyCommandFilters();
        });
      })(filterBtns[f]);
    }

    var copyBtns = document.querySelectorAll(".js-copy-cmd");
    for (var c = 0; c < copyBtns.length; c += 1) {
      (function (btn) {
        btn.addEventListener("click", function () {
          var val = btn.getAttribute("data-copy") || "";
          if (!val) return;
          var markCopied = function () {
            btn.textContent = "Copiato";
            btn.classList.add("is-copied");
            window.setTimeout(function () {
              btn.textContent = "Copia";
              btn.classList.remove("is-copied");
            }, 1500);
          };
          if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            navigator.clipboard.writeText(val).then(markCopied, function () {});
          } else {
            try {
              var ta = document.createElement("textarea");
              ta.value = val;
              ta.setAttribute("readonly", "");
              ta.style.position = "fixed";
              ta.style.opacity = "0";
              document.body.appendChild(ta);
              ta.select();
              document.execCommand("copy");
              document.body.removeChild(ta);
              markCopied();
            } catch (e) {}
          }
        });
      })(copyBtns[c]);
    }

    // 6. Silent live sync with GitHub Latest release
    if (typeof window.fetch === "function") {
      window
        .fetch("https://api.github.com/repos/dylantorresin/vesper-lotro-patcher/releases/latest", {
          headers: { Accept: "application/vnd.github+json" }
        })
        .then(function (res) {
          return res.ok ? res.json() : null;
        })
        .then(function (rel) {
          if (!rel || !Array.isArray(rel.assets)) return;
          var exe = rel.assets.find(function (a) {
            return (
              a &&
              typeof a.name === "string" &&
              a.name.toLowerCase().endsWith(".exe") &&
              a.browser_download_url
            );
          });
          if (exe) {
            var dlIds = ["primary-download-btn", "header-download-btn", "mockup-download-btn"];
            for (var d = 0; d < dlIds.length; d += 1) {
              var el = document.getElementById(dlIds[d]);
              if (el) el.href = exe.browser_download_url;
            }
          }
          var tag = typeof rel.tag_name === "string" ? rel.tag_name.trim() : "";
          var badge = document.getElementById("live-version-badge");
          if (tag && badge && /^v\d+\.\d+\.\d+$/.test(tag)) {
            badge.textContent = "Patcher " + tag + " · Testi U50.2 r8 · Windows x64";
          }
        })
        .catch(function () {});
    }
  } catch (err) {}
})();
