$(document).ready(function() {
    // Fetch GitHub repositories
    $.ajax({
        url: 'https://api.github.com/users/IMcLean836/repos',
        method: 'GET',
        success: function(repos) {
            repos.forEach(function(repo) {
                $('#repos-list').append(
                    `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
                );
            });
        },
        error: function(error) {
            console.error('Error fetching repos:', error);
        }
    });

    // Add hover effect to social media icons
    $('.social-media a').hover(function() {
        $(this).css('transform', 'scale(1.2)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});
