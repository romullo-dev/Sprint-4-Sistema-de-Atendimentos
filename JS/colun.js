$(document).ready(function () {
  $('#example').DataTable({
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página", 
      zeroRecords: "Nenhum registro encontrado",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      infoEmpty: "Mostrando 0 a 0 de 0 registros",
      infoFiltered: "(filtrado de _MAX_ registros no total)",
      search: "Buscar:",
      paginate: {
        first: "Primeiro",
        last: "Último",
        next: "Próximo",
        previous: "Anterior"
      }
    }
  });
});
