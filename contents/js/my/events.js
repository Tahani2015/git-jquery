function myEvents(){

	$.get("https://api.github.com/users/Tahani2015/events", github, function(data) {

        var events = data
        
        $.get("/git-jquery/templates/myEventList.jade", function(template) {

            var html = jade.render(template, {items: events})            

            $("#list").html(html)
            $("#details").html('')

        })

    })
}