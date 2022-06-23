        let datatable_obj = null;
        let selected_wilayah = "";

        function initialize_datatables(wilayah) {
            let object_data = {};
            fetch('https://datasekolahapi.herokuapp.com/api/data/sd/jakarta/' + wilayah)
            .then(response => response.json())
            .then(data => object_data.data = data)
            .then(object_data => {
                if (datatable_obj) datatable_obj.destroy();
                datatable_obj = $('#table_id').DataTable({
                    data: object_data,
                    columns: [
                        {
                            render: function ( data, type, full, meta ) {
                                return  meta.row + 1;
                            }
                        },
                        {data:"nama"},
                        {data:"status"},
                        {data:"jenjang"},
                        {data:"npsn"},
                        {data:"desa"},
                        {data:"kecamatan"},
                        {data:"kabupaten"},
                        {data:"provinsi"},
                        {data:"alamat"},
                        {data:"kodepos"}
                    ],
                });
            })
        }

        function getList_wilayah() {
            selectElement = document.querySelector('#select1');
            selected_wilayah = selectElement.options[selectElement.selectedIndex].value;

            initialize_datatables(selected_wilayah);
        }

        $(document).ready(function () {
            initialize_datatables("");
        });

        $("a.newtab").on("click",function(){
            window.open('https://www.linkedin.com/in/dedisemara/','_blank');
        });