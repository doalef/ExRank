$(document).ready(function(){

    var data = [];
    $('.submit').click(function(){
        var rightAnswer = parseInt($('.correct').val());
        var name = $('.name').val();
        var lesson = $('.lesson').val();
        var wrongAnswer = parseInt($('.wrong').val());
        var all = parseInt($('.all').val());
        if (rightAnswer && name && lesson && all) {
            console.log('success');
            nullit();
            var stu = {
                name: name,
                lesson: lesson,
                all: all,
                right: rightAnswer,
                wrong: wrongAnswer,
                percent: percentage(all,rightAnswer,wrongAnswer)
            }
            console.log(stu)
            data.push(stu);
            var row = "<tr class=\"nth\"><td>" + stu.name +  "</td><td>" + stu.percent + "</td><td>" + stu.all + "</td><td>" +
            stu.right + "</td><td>" + stu.wrong;
            $('tbody').append(row);
            w3.sortHTML('#myTable', '.nth', 'td:nth-child(2)');
        }
    })

    $('.download').click(function(){
        domtoimage.toBlob(document.getElementById('contain'))
        .then(function (blob) {
            window.saveAs(blob, 'my-node.png');
        });
    })

    function percentage(all,correct,wrong) {
        correct*=3;
        all*=3;
        return (((correct - wrong)/all)*100);
    }

    function nullit(){
        $('.name').val('');
        $('.lesson').val('');
        $('.correct').val('');
        $('.wrong').val('');
        $('.all').val('');
    }
})