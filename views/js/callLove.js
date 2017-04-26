function getModal(a){

var myVar = <%- JSON.stringify(issuepostModels) %>;
  alert(a)
  var modal = '';
        modal += '<div class="modal" id="bsPhotoGalleryModal" tabindex="-1" role="dialog"';
        modal += 'aria-labelledby="myModalLabel" aria-hidden="true">';
        modal += '<div class="modal-dialog modal-lg"><div class="modal-content">';
        modal += '<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h1 class="modal-title" ></h1></div>';
        
        
        modal += '<div class="modal-body"></div>'
        modal += '<div class="modal-footer"><div class="col-md-4"></div></div></div></div></div>';

        $('body').append(modal); 

        var html = '';
        var htmltitle = '';
        var htmlcomment = '';

        htmltitle += '<img src="/images/Logo2.jpg" alt="HTML5 Icon" style="width:10%;height:auto;" ></a>&nbsp;&nbsp;<font align=left color=#F0F8FF>' + myVar[a].title + '</font>'
        var imgTotal = Object.keys(myVar[a].img_url).length-1;
        var videoTotal = Object.keys(myVar[a].video_url).length;
        var imgCommTotal = Object.keys(myVar[a].img_comment).length;
        var commTotal = Object.keys(myVar[a].comments).length;
        var userCommTotal = Object.keys(myVar[a].userComments).length;


        for( var x= 0; x < imgTotal; x++){

          html += '<img src="' + myVar[a].img_url[x] + '" class="img-responsive"/>';
        }
         
        html +='<br>'
        for( var x= 0; x < videoTotal; x++){

          html += '<div style="text-align:center"><iframe ="embed-responsive-item" src= "' + myVar[a].video_url[x] + '" bgcolor="#000000" width="500" height="400" name="NEXT4896413" align="middle" allowscriptaccess="always" allowfullscreen="true" type="application/x-shockwave-flash"></iframe></div>';
        }
        html += '<br>'

        for( var x= 0; x < imgCommTotal; x++){
          html += '<div class ="imgcomment"><font color ="#ffffff">' + myVar[a].img_comment[x] +'</font></div>';
        }

        html += '<br>'

        
        htmlcomment += '<form name ="myForm" role="form" method="post" action="/' + myVar[a]._id + '/<%= currentPage %>/hazzul"><textarea class="form-control" type = "text" name="userPost" placeholder="댓글 달아주세요" rows="5" id="comment" required></textarea><br><button type="submit" class="btn btn-danger btn-lg " style ="float:left"><i class="fa fa-edit"></i> 댓글 달기</button></form>';


        var totalcomm = commTotal + userCommTotal;
        htmlcomment += '<font size="5" color ="yellow">댓글' + ' ' + totalcomm + '</font>';
        htmlcomment += '<br><br><br>'

        for( var x= 0; x < commTotal; x++){
          htmlcomment += '<div class="text-left" ><img src="/images/Favicon.ico" style="width:30px;height:27px;">&nbsp<b><font size ="5" color="#F0F8FF">' + myVar[a].comments[x].content +'</b></div><br>';
        }


        for( var x= 0; x < userCommTotal; x++){
          htmlcomment += '<div class="text-left" ><img src="/images/Favicon.ico" style="width:30px;height:27px;">&nbsp<b><font size ="5" color="#F0F8FF">' + myVar[a].userComments[x].userPost +'</b></div><br>';
        }

        $('#bsPhotoGalleryModal .modal-title').html(htmltitle);
        $('#bsPhotoGalleryModal .modal-body').html(html);
        $('#bsPhotoGalleryModal .modal-footer').html(htmlcomment);



}