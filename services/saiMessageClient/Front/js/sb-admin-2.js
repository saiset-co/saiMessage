(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
  //mycustom ready
    alert(0)
    // websocket
    var socket = new WebSocket(_saiWebsocket);
    socket.onopen = function () {
      console.log("Status: Connected");
    };
    socket.onmessage = function (e) {
      console.log("Server: " + e.data);

      var MessageSTR = JSON.parse(e.data)
      var Message = JSON.parse(MessageSTR)
      Message.message = b64DecodeUnicode(Message.message);
      if (Message.conversationId != $('.activeHLink').html()) {
        $('.badge-counter').html($('.badge-counter').html()+1);
        $("h6:contains("+Message.conversationId+")").addClass('newMessage');
      }
      if (Message.conversationId == $('.activeHLink').html() && Message.from == $('#converationMyId').html() ) {
        var mesBlock = `
        <!-- Content Row -->
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-4"></div>
            <!-- Pending Requests Card Example -->
            <div class="col-xl-8 col-md-8 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  me (${Message.from})
                                </div>
                                <div class="h5 mb-0 text-gray-800">${Message.message}</div>
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
      `;
      $('#contentArea').append(mesBlock);
      // $('#contentArea').append(mesBlock.replace(/\+/g,' '));
      window.scrollTo(0,document.body.scrollHeight);
      }
      if (Message.conversationId == $('.activeHLink').html() && Message.from != $('#converationMyId').html() ) {
        var mesBlock = `
        <!-- Content Row -->
        <div class="row">
            <!-- Pending Requests Card Example -->
            <div class="col-xl-8 col-md-8 mb-4 align-self-start">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                  ${Message.from}
                                </div>
                                <div class="h5 mb-0 text-gray-800">${Message.message}</div>
                                <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">18</div> -->
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-4"></div>
        </div>
      `;
      $('#contentArea').append(mesBlock.replace(/\+/g,' '));
      window.scrollTo(0,document.body.scrollHeight);
      }
    };
    //  /websocket

    // get initial values & history
    callApi('getMyIds',null,function(res){
      var obj = JSON.parse(res)
      $.each( obj, function( i, val ) {
          $('#profilesList').append(`
          <a class="dropdown-item currentProfileSelectLink" data-profileId="${val}" data-profileName="" href="#">
              <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              ${val}
          </a>`)
      });
    })

    callApi('getMyConversations',null,function(res){
      var obj = JSON.parse(res)
      $.each( obj, function( i, val ) {
        $('#conversationsList').append(`<h6 class="longstringWrap conversationLink" href="buttons.html">${val}</h6>`)
      });
    })

    callApi('getMySubscriptions',null,function(res){
      var obj = JSON.parse(res)
      console.log('Subscription OBJ',obj);
      $.each( obj, function( id, subscr ) {
        var channelsList = '';
        var botsList = '';
        var groupsList = '';
        var info = '';
        if (subscr.name) { info = subscr.name } else {info = id }
        if(subscr.type == 'channel') {
          channelsList+=`<h6 class="longstringWrap channelLink" href="buttons.html">${info}</h6>`
        }
        if(subscr.type == 'bot') {
          botsList+=`<h6 class="longstringWrap botLink" href="buttons.html">${info}</h6>`
        }
        if(subscr.type == 'group') {
          groupsList+=`<h6 class="longstringWrap groupLink" href="buttons.html">${info}</h6>`
        }
        $('#channelsList').html(channelsList)
        $('#botsList').html(botsList)
        $('#groupslsList').html(groupsList)
      });
    })
    //  /get initial values & history
    $(document).on('click','.channelLink',function(){
      $('.activeHLink').removeClass('activeHLink')
      $(this).addClass('activeHLink')
      loadTemplate('channelArea',function(){
          $('#channelAreaId').html($('.activeHLink').html())
      })
    })


    $(document).on('click','.conversationLink',function(){
      $('.activeHLink').removeClass('activeHLink')
      $(this).addClass('activeHLink')
      loadTemplate('conversationArea',function(){
        callApi('getConversationInfo',[{"name":"conversationId","value":$('.activeHLink').html()}],function(res){
          console.log('getConversationInfo',res);
          var obj = JSON.parse(res)
          console.log('getConversationInfo obj',obj);
          $('#currentProfile').html(obj.me)
          $('#converationMyId').html(obj.me)
          $('#converationWithId').html(obj.with)
          $('#converationStatus').html(obj.status)
          if (obj.status!='active') {
            $('footer').addClass('d-none')
          } else {$('footer').removeClass('d-none') }
          if (typeof obj.history == 'string') {
            var historyItems = [];
            // g0 - date, g2 - object, g1 - full
            obj.history.replace(/\[saiStorageHistory_([0-9]+)\](.*?)\[\/saiStorageHistory_([0-9]+)\]/g, function(g0,g1,g2){historyItems.push(g2);})
            $.each(historyItems,function(i,v){
              var Message = JSON.parse(v);
              Message.message = b64DecodeUnicode(Message.message);
              if (Message.conversationId == $('.activeHLink').html() && Message.from == $('#converationMyId').html() ) {
                var mesBlock = `
                <!-- Content Row -->
                <div class="row">
                  <div class="col-xl-4 col-md-4 mb-4"></div>
                    <!-- Pending Requests Card Example -->
                    <div class="col-xl-8 col-md-8 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                          me (${Message.from})
                                        </div>
                                        <div class="h5 mb-0 text-gray-800">${Message.message}</div>
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
              `;
              $('#contentArea').append(mesBlock);
              window.scrollTo(0,document.body.scrollHeight);
              }
              if (Message.conversationId == $('.activeHLink').html() && Message.from != $('#converationMyId').html() ) {
                var mesBlock = `
                <!-- Content Row -->
                <div class="row">
                    <!-- Pending Requests Card Example -->
                    <div class="col-xl-8 col-md-8 mb-4 align-self-start">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                          ${Message.from}
                                        </div>
                                        <div class="h5 mb-0 text-gray-800">${Message.message}</div>
                                        <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">18</div> -->
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-4"></div>
                </div>
              `;
              $('#contentArea').append(mesBlock.replace(/\+/g,' '));
              window.scrollTo(0,document.body.scrollHeight);
              }
            })
          }
          if (typeof obj.history == 'array') {
            $('conversationArea').html(obj.history)
          }

        })
        console.log('Download conversation history '+$('.activeHLink').html());
      })
    })
  // new conversation
    $(document).on('click','.createNewConversation',function(){
      loadTemplate('createNewConversation',function(){
        $(document).on('submit','#createNewConversationeForm',function(){
          callApi('createConversaion',$(this).serializeArray(),function(res){
            callApi('getMyConversations',null,function(res){
              var obj = JSON.parse(res)
              var conversationsList = ''
              $.each( obj, function( i, val ) {
                conversationsList+=`<h6 class="longstringWrap conversationLink" href="buttons.html">${val}</h6>`
              });
              $('#conversationsList').html(conversationsList)
            })
          })
          return false;
        })
      })
    })

    $(document).on('click','#sendMessageButton',function(){
      var param = [
        {"name":"from","value":$('#currentProfile').html()},
        {"name":"to","value":$('#converationWithId').html()},
        {"name":"type","value":"message"},
        {"name":"message","value":$('#messageInput').val()},
        {"name":"converasationId","value":$('.activeHLink').html()}
      ]
      callApi('sendMessage',param,function(res){ $('#messageInput').val(''); });
    })
  // Profile
    $(document).on('click','.currentProfileSelectLink',function(){
      $('#currentProfile').html($(this).attr('data-profileId'))
      $('#currentProfileInConversation').html('Current ID: '+$(this).attr('data-profileId'))
    })

    $(document).on('click','#createNewProfile',function(){
      loadTemplate('createNewProfile',function(){
        $(document).on('submit','#createNewProfileForm',function(){
          callApi('createId',null,function(){
            callApi('getMyIds',null,function(res){
              var obj = JSON.parse(res)
              var profilesList = ''
              $.each( obj, function( i, val ) {
                console.log(val);
                 profilesList+=`
                  <a class="dropdown-item currentProfileSelectLink" data-profileId="${val}" data-profileName="" href="#">
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      ${val}
                  </a>`
              });
              $('#profilesList').html(profilesList);
            })
          });
          // callApi($( this ).serialize());
          return false;
        })
      });
    })

  // Search Channel
    $(document).on('click','.findChannel',function(){
      loadTemplate('findChannel');
      return false;
    });
    $(document).on('submit','#subscribeForm',function(){
      callApi('subscribe',$(this).serializeArray(),function(){
        callApi('getMySubscriptions',null,function(res){
          // displayMySubscription(res);
        })
      })
      return false;
    })
    $(document).on('submit','.subscribeChannelButton',function(){

    })



  ///////////////////////////////////////


})(jQuery); // End of use strict
