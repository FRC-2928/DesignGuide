// Turns every <div class="compare"> holding two images into a before/after slider.
// See docs/stylesheets/compare.css for the markup.
function setupCompareSliders() {
  document.querySelectorAll(".md-typeset .compare:not(.compare-ready)").forEach(function (box) {
    var imgs = box.querySelectorAll("img");
    if (imgs.length < 2) return;
    var before = imgs[0];
    var after = imgs[1];

    // Put the "after" image first as the base, and lay the "before" image over it.
    box.innerHTML = "";
    box.appendChild(after);
    before.classList.add("compare-before");
    box.appendChild(before);

    [[before, "compare-label-before"], [after, "compare-label-after"]].forEach(function (pair) {
      if (!pair[0].alt) return;
      var label = document.createElement("span");
      label.className = "compare-label " + pair[1];
      label.textContent = pair[0].alt;
      box.appendChild(label);
    });

    var range = document.createElement("input");
    range.type = "range";
    range.min = "0";
    range.max = "100";
    range.step = "0.5";
    range.value = "50";
    range.className = "compare-range";
    range.setAttribute("aria-label", "Drag to compare " + (before.alt || "before") + " and " + (after.alt || "after"));
    box.appendChild(range);

    var line = document.createElement("div");
    line.className = "compare-line";
    box.appendChild(line);

    var handle = document.createElement("div");
    handle.className = "compare-handle";
    box.appendChild(handle);

    range.addEventListener("input", function () {
      box.style.setProperty("--pos", range.value + "%");
    });

    box.classList.add("compare-ready");
  });
}

if (window.document$) {
  // Material for MkDocs: runs on every page load, including instant navigation.
  document$.subscribe(setupCompareSliders);
} else {
  document.addEventListener("DOMContentLoaded", setupCompareSliders);
}
