$(document).ready(function () {
    let data = [];
    $(".navbar-brand").html("JQuery");
    $(".navbar-brand").on("click", welcome)
    $("#search-input").on("input", search);

    $.ajax(
        {
            url: "http://localhost:8000/api/note/list",
            type: "GET",
            dataType: "json",
        }
    ).done(function(response) {
        console.log(response)
        data = response
        displayProduct(response)
    })

    function welcome() {
        alert("welcome");
    }


    function search() {
        let searchValue = $(this).val();
        let result = [];
        for (let i = 0; i < data.length; i++) {
            if(data[i].title.includes(searchValue) ) {
                result.push(data[i]);
            }
        }
        displayProduct(result);
    }


    function displayProduct(product){
        let html = "";
        for (let i = 0; i < product.length; i++) {
            html += `<tr>
                <th scope="row">${product[i].id}</th>
                <td>${product[i].title}</td>
                <td>${product[i].content}</td>
                <td>${product[i].date}</td>
                </tr>`
        }
        $(".list-product").html(html);
    }
})
