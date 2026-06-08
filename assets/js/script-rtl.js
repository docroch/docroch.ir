// cd-headline for RTL

jQuery(document).ready(function($) {
    // Read words from HTML tags
    var words = [];
    $('#words-source b').each(function() {
        words.push($(this).text());
    });

    var i = 0;
    var j = 0;
    var currentWord = "";
    var isDeleting = false;

    function type() {
        currentWord = words[i];
        
        if (isDeleting) {
            $("#typing-text").text(currentWord.substring(0, j - 1));
            j--;
        } else {
            $("#typing-text").text(currentWord.substring(0, j + 1));
            j++;
        }

        var speed = isDeleting ? 50 : 90;

        if (!isDeleting && j === currentWord.length) {
            speed = 1500; // Pause at the end
            isDeleting = true;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }

        setTimeout(type, speed);
    }

    if (words.length > 0) {
        type();
    }
});