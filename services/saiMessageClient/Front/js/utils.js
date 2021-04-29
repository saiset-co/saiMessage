//=====================================================================
//See comment near next big divider line.
let exportsSelf = {};
/**
     * image pasting into canvas
     *
     * @param {string} canvas_id - canvas id
     * @param {boolean} autoresize - if canvas will be resized
     * @param {function} callback
     */
    exportsSelf.CLIPBOARD_CLASS = function (canvas_id, autoresize, callback) {
        let _self = this;
        let canvas = document.getElementById(canvas_id);
        console.log('CLIPBOARD_CLASS canvas', canvas);
        let ctx = document.getElementById(canvas_id).getContext("2d");
        console.log('CLIPBOARD_CLASS ctx', ctx);

        //handlers
        document.addEventListener('paste', function (e) {
            __E = e;
            console.log('paste');
            _self.paste_auto(e);
        }, false);

        /* events fired on the drop targets */
        document.addEventListener("dragover", function (e) {
            // prevent default to allow drop
            e.preventDefault();
        }, false);
        document.addEventListener('drop', function (e) {
            // prevent default action (open as link for some elements)
            // add event handler to canvas if desired instead of document
            //debugger;
            e.preventDefault();
            let items = e.dataTransfer.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf("image") !== -1) {
                    //document.getElementById("instructions").style.visibility = "hidden";
                    //image
                    let blob = items[i].getAsFile();
                    let URLObj = window.URL || window.webkitURL;
                    let source = URLObj.createObjectURL(blob);
                    _self.paste_createImage(source);
                }
            }
        });

        //on paste
        this.paste_auto = function (e) {
            if (e.clipboardData) {
                let items = e.clipboardData.items;
                if (!items) {
                  console.log('not items',items)
                    return;
                }

                //access data directly
                noimage = 0;
                for (let i = 0; i < items.length; i++) {
                  __GLOBCL = items[i]
                    if (items[i].type.indexOf("image") !== -1) {
                        //image
                        let blob = items[i].getAsFile();
                        let URLObj = window.URL || window.webkitURL;
                        let source = URLObj.createObjectURL(blob);
                        this.paste_createImage(source);
                    } else {
                        noimage++;
                        console.log('not IMG',i)
                    }
                }
                if ( items.length == noimage) return;
                e.preventDefault();
            }
        };
        //draw pasted image to canvas
        this.paste_createImage = function (source) {
            console.log('this.paste_createImage', source);
            //debugger;
            let pastedImage = new Image();
            pastedImage.onload = function () {
                if (autoresize == true) {
                    //resize
                    canvas.width = pastedImage.width;
                    canvas.height = pastedImage.height;
                } else {
                    //clear canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
                ctx.drawImage(pastedImage, 0, 0);
                const imageAsString = getImgAsString(canvas_id);
                callback(imageAsString);
            };
            pastedImage.src = source;
        };
    };

function isCanvasBlank(canvas) { // detect blank canvas: https://stackoverflow.com/a/17386803/
  console.log('isCanvasBlank', canvas);
  let blank = document.createElement('canvas');
  blank.width = canvas.width;
  blank.height = canvas.height;
  return canvas.toDataURL() === blank.toDataURL();
}

function getImgAsString(canvasElementId) {
        console.log('getImgAsString', canvasElementId);
        //debugger;
        let canvasEl = document.getElementById(canvasElementId);
        if (isCanvasBlank(canvasEl)) {
            return null;
        } else {
            let imageData = canvasEl.toDataURL("image/png");
            //console.log('imageData', imageData);
            imageData = imageData.replace('data:image/png;base64,', '');
            return imageData;
        }
    }

//=====================================================================
//Everything above that line could be put into a webpack module. Then the following could be called on a page after the document has loaded:

const canvasElementId = 'my_canvas';
let CLIPBOARD = new exportsSelf.CLIPBOARD_CLASS(canvasElementId, true, function() {
  console.log('paste_auto finished');
  var id = uid()
  var th_id = $('.activeHLink').attr("data-theId")+id
  const imgString = getImgAsString(canvasElementId);
  if (!$( "footer" ).hasClass( "d-none" )) {
    var rnd = Math.floor(Math.random() * 999) + 1;
    $('conversationArea').append(`
      <!-- Content Row -->
      <div class="row">
      <div class="col-xl-4 col-md-4 mb-4"></div>
      <!-- Pending Requests Card Example -->
      <div class="col-xl-8 col-md-8 mb-4">
      <div class="card border-left-success shadow h-100 py-2 sending" id="${th_id}">
      <div class="card-body">
      <div class="row no-gutters align-items-center">
      <div class="col mr-2">
      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
      me
      </div>
      <div class="h5 mb-0 text-gray-800"><span id="upl${rnd}">Sending...</span> <img src="data:image/png;base64,${imgString}" ></div>
      <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">18</div> -->
      </div>
      <div class="col-auto">
      <i class="fas fa-comments fa-2x text-gray-300"></i>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      `);
    window.scrollTo(0,document.body.scrollHeight);
    $.post(_mediaServer+'save_media_data',{'file':imgString},function(res){
      console.log('#upl'+rnd,res);
      // var id = uid()
      if(res.result.internal_id) {
        var param = [
          {"name":"from","value":$('#currentProfile').attr('data-theId')},
          {"name":"to","value":$('#converationWithId').attr('data-theId')},
          {"name":"type","value":"message"},
          {"name":"message","value":'~imgMSL64:~'+_mediaServer+'get_media_data&internal_id='+res.result.internal_id+'~/imgMSL64~'},
          {"name":"converasationId","value":$('.activeHLink').attr("data-theId")},
          {"name":"messageFrontId","value":$('.activeHLink').attr("data-theId")+id}
        ]
        callApi('sendMessage',param,function(res){  });
        $('#upl'+rnd).remove()
      };
    })
  }
});
$.ready(function(){
  document.getElementById('go').addEventListener('click', function() {
    const imgString = getImgAsString(canvasElementId);
    alert(imgString);
    document.getElementById('output').innerHTML = imgString;
  });
})
