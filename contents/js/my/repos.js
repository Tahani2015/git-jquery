function myRepos(){

    $.get("https://api.github.com/users/Tahani2015/repos", github, function(data) {

        var repos = data
        
        $.get("/git-jquery/templates/repoList.jade", function(template) {

            var html = jade.render(template, {items: repos})            

            $("#list").html(html)

            repoView(repos[0].full_name)

        })

    })

}
