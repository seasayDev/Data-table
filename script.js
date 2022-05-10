/**
  * This function allows you to display the list of job applications
  * with the data-table plugin.
  */
 $.fn.dataTable.ext.errMode = "throw";
$(document).ready(function () {
  $("#job").dataTable({
    responsive: true,
    ajax: {
      url: "Data/data.json",
      dataSrc: "",
    },
    columns: [
      { data: "profile" },
      { data: "name" },
      { data: "forename" },
      { data: "birthday" },
      { data: "position" },
      { data: "email" },
      { data: "adress" },
      { data: "zip code" },
      { data: "CV" },
      { data: "comments" },
    ],
  });
});
