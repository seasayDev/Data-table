/**
 * Data-table — People directory
 * Renders the roster with jQuery DataTables and a few quality-of-life
 * column renderers (avatar, name, resume link, empty cells).
 */
$.fn.dataTable.ext.errMode = "throw";

$(document).ready(function () {
  var table = $("#people").DataTable({
    responsive: true,
    pageLength: 8,
    lengthMenu: [5, 8, 10, 25, 50],
    order: [[1, "asc"]],
    language: {
      search: "",
      searchPlaceholder: "Search people…",
      lengthMenu: "Show _MENU_ entries",
      info: "Showing _START_ to _END_ of _TOTAL_ people",
      paginate: { first: "«", last: "»", next: "→", previous: "←" },
    },
    ajax: {
      url: "Data/data.json",
      dataSrc: "",
    },
    columns: [
      {
        data: "profile",
        orderable: false,
        searchable: false,
        render: function (src) {
          if (!src) return placeholderAvatar();
          return (
            '<img class="avatar" src="' +
            src +
            '" alt="Profile" loading="lazy" onerror="this.replaceWith(placeholderAvatarEl())" />'
          );
        },
      },
      { data: "name", render: boldCell },
      { data: "forename" },
      { data: "birthday", render: dateCell },
      {
        data: "position",
        render: function (v) {
          return v ? '<span class="cell-name">' + esc(v) + "</span>" : "—";
        },
      },
      { data: "email", render: emailCell },
      { data: "adress" },
      { data: "zip code" },
      {
        data: "CV",
        orderable: false,
        render: function (v) {
          return v
            ? '<a class="resume-link" href="' +
                v +
                '" target="_blank" rel="noopener">↗ Resume</a>'
            : "—";
        },
      },
      {
        data: "comments",
        render: function (v) {
          return v ? esc(v) : "—";
        },
      },
    ],
    initComplete: function () {
      var count = this.api().rows().count();
      $("#stat-count").text(count);
      $("#pill-count").text(count);
    },
  });

  // Keep the hero stat in sync when the filter changes.
  table.on("draw", function () {
    $("#pill-count").text(table.rows({ search: "applied" }).count());
  });
});

/* ---------- helpers ---------- */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function boldCell(v) {
  return v ? '<span class="cell-name">' + esc(v) + "</span>" : "—";
}

function emailCell(v) {
  if (!v) return "—";
  return '<a href="mailto:' + esc(v) + '">' + esc(v) + "</a>";
}

function dateCell(v) {
  if (!v) return "—";
  var d = new Date(v);
  if (isNaN(d)) return esc(v);
  return d.toLocaleDateString("en-CA"); // YYYY-MM-DD
}

function placeholderAvatar() {
  return '<span class="avatar" style="display:grid;place-items:center;background:var(--green-soft);color:var(--green-deep);font-weight:700">?</span>';
}

function placeholderAvatarEl() {
  var s = document.createElement("span");
  s.className = "avatar";
  s.style.cssText =
    "display:grid;place-items:center;background:#dcfce7;color:#15803d;font-weight:700";
  s.textContent = "?";
  return s;
}
