function upDate(previewPic){
	
    console.log("upDate triggered");
    console.log("previewPic.src:", previewPic.src);
    console.log("previewPic.alt:", previewPic.alt);

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
	}

	function unDo(){

    console.log("unDo triggered");

    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
	}
