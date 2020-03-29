$(document).ready(function () {
    // let id = $(this).attr("data-id");

    //for the devour button
    $('.burgerEat').on("click", function (event) {
        event.preventDefault();

        let id = $(this).attr("data-id");

        console.log("this", id);

        $.ajax({
            url: "/" + id,
            type: "PUT",
            success: function (response) {
                location.reload();
            }
        })
    })

    $('.regurgitate').on("click", function (event) {
        event.preventDefault();

        let id = $(this).attr("data-id");

        console.log("this", id);

        $.ajax({
            url: "/" + id,
            type: "PUT",
            success: function (response) {
                location.reload();
            }
        })
    })
});