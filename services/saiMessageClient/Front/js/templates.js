_Templates = {};
_Templates.createNewProfile = `
  <form id="createNewProfileForm">
    <input class="form-control" type="text" name="info[name]" placeholder="nik or name or whatever"><br>
    Register in saiMessage public name server: <input type="checkbox"name="regpub" value="1"><br>
    <button class="btn btn-primary" type="submit">Create New Profile</button>
  </form>
` ;

_Templates.conversationArea = `
  <div>
    Conversation <input id='conversationName' type="text">
    <button class="btn btn-sm btn-primary clearConversationAction" data-conversationId='' type="button">Clear History</button>
    <button class="btn btn-sm btn-primary arciveConversationAction" data-conversationId='' type="button">Archive Conversation</button>
  </div>
  <div><span id="converationMyId"></span> <--> <span id="converationWithId"></span>
  </div>
  <div>Status: <span  id="converationStatus"></span></div>
  This is the very beginning of this  conversation
  <conversationArea></conversationArea>
` ;

_Templates.groupArea = `
  <div>
    Group Name: <input id='groupName'  type="text">
    <input id='activeGroupId'  type="hidden">
    <button class="btn btn-sm btn-primary clearConversationAction" data-conversationId='' type="button">Clear Local History</button>
    <button class="btn btn-sm btn-primary arciveGroupAction" data-conversationId='' type="button">Archive Group</button>
    <button class="btn btn-sm btn-primary blockGroupAction" data-conversationId='' type="button">Block Group</button>
    <button class="btn btn-sm btn-warning initeToGroupButton" data-btype="inviteToGroup" data-conversationInfo='' data-toggle="modal" data-target="#modal" type="button">Invite</button>
  </div>
  <div><span id="groupDescription"></span>   </div>
  <div>Active partisipants: <span  id="activePartisipantsNumber">--</span></div>
  This is the very beginning of this  conversation
  <conversationArea></conversationArea>
` ;

_Templates.channelArea = `
  This is the very beginning of the <span  id="channelAreaId"></span> channel.
  <conversationArea></conversationArea>
` ;

_Templates.findChannel = `
<h3>Serach channel</h3>
<form id="serachChannelForm">
  <div class="form-group">
    <label for="nameserver">Name server</label>
    <select class="form-control"id="nameserver" name="nameserver">
      <option>saiMessage public name server</option>
    </select>
  </div>
  <div class="form-group">
    <input type="hidden" id="searchSubscType" value="channel">
    <label for="serachChannel">Serach</label>
    <input type="text" class="form-control"id="serachChannel" name="searchChannel" placeholder="channel name, id, keywords...">
  </div>
  <button type="submit" class="btn btn-primary">Search</button>
</form>
<searchChannelasection>
</searchChannelasection>
</br>
<h3>Subscribe by id</h3>
<form id="subscribeForm">
  <div class="form-group">
    <label for="subscriptionId">Channel id </label>
    <input type="text" class="form-control" id="subscriptionId" name="subscriptionId">
    <input type="hidden" value="channel" name="type">
  </div>
  <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
</br>
<h3>Subscribe by hashtag #</h3>
<form id="subscribeHashtagForm">
  <div class="form-group">
    <label for="subscriptionHashtag">Hashtag #</label>
    <input type="text" class="form-control"id="subscriptionHashtag" name="subscriptionHashtag">
  </div>
  <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
<!--
  <form id="subscribeForm">
    Channel ID:<input class="form-control" type="text" name="subscriptionId"><br>
    <input type="hidden" name="type" value="channel">
    <button class="btn btn-primary" type="submit">Subscribe</button>
  </form>-->
` ;

_Templates.findGroup = `
<h3>Serach group</h3>
<form id="serachChannelForm">
  <div class="form-group">
    <label for="nameserver">Name server</label>
    <select class="form-control"id="nameserver" name="nameserver">
      <option>saiMessage public name server</option>
    </select>
  </div>
  <div class="form-group">
    <input type="hidden" id="searchSubscType" value="group">
    <label for="serachChannel">Serach</label>
    <input type="text" class="form-control"id="serachChannel" name="searchChannel" placeholder="group name, id, keywords...">
  </div>
  <button type="submit" class="btn btn-primary">Search</button>
</form>
<searchChannelasection>
</searchChannelasection>
</br>
<h3>Subscribe by group id</h3>
<form id="subscribeForm">
  <div class="form-group">
    <label for="subscriptionId">Group id </label>
    <input type="text" class="form-control" id="subscriptionId" name="subscriptionId">
    <input type="hidden" value="group" name="type">
  </div>
  <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
</br>
` ;

_Templates.createNewConversation = `
  <form id="createNewConversationeForm">
    My ID:<select class="form-control" id="my_address" name="my_address"></select><br>
    With ID:<input class="form-control" type="text" id="conversationWithAddress" name="with_address"><br>
    <button class="btn btn-primary" type="submit">Create Conversation</button>
    <contactsForCreateCommunication>
    </contactsForCreateCommunication>
  </form>
  <h3>Serach contact</h3>
  <form id="searchchContact4conversationForm">
    <div class="form-group">
      <label for="nameserver">Name server</label>
      <select class="form-control"id="nameserver" name="nameserver">
        <option>saiMessage public name server</option>
      </select>
    </div>
    <div class="form-group">
      <label for="serachContact">Search</label>
      <input type="text" class="form-control" id="serachContact4conversation" name="serachContact" placeholder=" id, name, info...">
    </div>
    <button type="submit" class="btn btn-primary">Search</button>
  </form>
  <searchContactSection>
  </searchContactSsection>
` ;

_Templates.createNewGroup = `
  <form id="createNewGoupForm">
    Group name: <input class="form-control" type="text" name="name"><br>
    Group description: <input class="form-control" type="text" name="description"><br>
    Group type(?): <input id="groupTypeToggle" name="is_secret" type="checkbox" data-toggle="toggle" data-on="Private" data-off="Public" data-onstyle="danger" data-offstyle="success">
    <br><br>
    <button class="btn btn-primary" type="submit">Create Group</button><br>
    Invite to the group:
    <groupInviteContacts>
    </groupInviteContacts>
  </form>
` ;

_Templates.mesageBox = `
<!-- Content Row -->
<div class="row">
    <!-- Pending Requests Card Example -->
    <div class="col-xl-8 col-md-8 mb-4 align-self-start">
        <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests</div>
                        <div class="h5 mb-0 text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas</div>
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
` ;

_Templates.settings = `
  <h3>Frontend settings</h3>
  <form id="settingsFrontendForm">
    <div class="form-group">
      <label for="settingsBackendUrl">Backend url</label>
      <input type="url" class="form-control"id="settingsBackendUrl" aria-describedby="settingsBackendUrlHelp" placeholder="http(s):// backend url">
      <small id="settingsBackendUrlHelp" class="form-text text-muted">The backend url is an url of your own saiMessage server.</br>
      Usually saiMessage server placed on your computer and have domain started with "localhost".</br>
      You can use saiMessage server outside of your own computer. In this case your data safity have more potensial risk.</br>
      You can read more about saiMessage architectura here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <div class="form-group">
      <label for="settingsWebSocket">Websocket notification</label>
      <input type="url" class="form-control"id="settingsWebSocket" aria-describedby="settingsWebSocketHelp" placeholder="ws(s):// notification server">
      <small id="settingsWebSocketHelp" class="form-text text-muted">The Websocket notifications is a help server whitch is provide
      notifications about new conversations and new messages to your web client.</br>
      Usually the websocket notification server placed on your computer and have domain started with "localhost".</br>
      You can use websocket notification server placed outside of your own computer.</br>
      More information about saiMessage architectura you can find here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </br>
  <h3>Backend settings</h3>
  <form id="settingsBackendForm">
    <div class="form-group">
      <label for="settingsCryptoServer">Crypto server url</label>
      <input type="url" class="form-control"id="settingsCryptoServer" aria-describedby="settingsCryptoServerlHelp" placeholder="http(s):// crypto server url">
      <small id="settingsCryptoServerHelp" class="form-text text-muted">The Crypto server url is an url of your own saiCrypto server.</br>
      Usually saiCrypto server placed on your computer and have domain started with "localhost".</br>
      saiCrypto server encrypt and decrypt your messages and holds a very critical information information about your cryptographic keys.</br>
      Nevertheless, you can use saiCrypto server outside of your own computer. In this case your data safity have more potensial risk.</br>
      You can read more about saiMessage architectura here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <div class="form-group">
      <label for="settingsSignValidation">Sign validation service</label>
      <input type="url" class="form-control"id="settingsSignValidation" aria-describedby="settingsSignValidationHelp" placeholder="http(s):// signature validation server">
      <small id="settingsSignValidationHelp" class="form-text text-muted">The Sign validation service is a help server
      whitch is validate cryptographic signatures of messages</br>
      Usually the sign validation service placed on your computer and have domain started with "localhost".</br>
      You can use sign validation service placed outside of your own computer.</br>
      More information about saiMessage architectura you can find here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <div class="form-group">
      <label for="settingsP2P">P2P service</label>
      <input type="url" class="form-control"id="settingsP2P" aria-describedby="settingsP2PHelp" placeholder="http(s):// p2p server">
      <small id="settingsP2PHelp" class="form-text text-muted">The p2p service connect your messager to a peer to peer network.</br>
      Usually the p2p service placed on your computer and have domain started with "localhost".</br>
      You can p2p service placed outside of your own computer.</br>
      More information about saiMessage architectura you can find here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <div class="form-group">
      <label for="settingsStorage">Storage settings</label>
      <input type="url" class="form-control"id="settingsStorage" aria-describedby="settingsStorageHelp" placeholder="storage server address">
      <small id="settingsStorageHelp" class="form-text text-muted">The storage is a place where your converasations history are stored.</br>
      Usually your conversations history stored in file system of you OS in a folder where your saiMessage server is installed.</br>
      In tis case, this settings is a folder name.</br>
      However you can use remotely storage server.</br>
      More information about saiMessage architectura you can find here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <!--
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    -->
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </br>
  <h3>Utilities</h3>
  <form id="settingsUtilitiesForm">
    <div class="form-group">
      <label for="settingsPublicNameserver">Public name server url</label>
      <input type="url" class="form-control"id="settingsPublicNameserver" aria-describedby="settingsPublicNameserverHelp" placeholder="http(s):// nameserver url">
      <small id="settingsPublicNameserverHelp" class="form-text text-muted">saiMesage allow you to create unlimited numbers of profiles and communicate anonymously.</br>
      Nevertheless you can make public some of your profile's.</br>
      Public name server is a place when you can public your profil and make it available for others.</br>
      You can read more about saiMessage public nameservers here: <a href="http://messager.saiset.co">http://messager.saiset.co</a>
      </small>
    </div>
    <div class="form-group">
      <label for="settingsMediaHosting">Media hosting</label>
      <input disabled type="url" class="form-control"id="settingsMediaHosting" aria-describedby="settingsMediaHostingHelp" placeholder="http(s):// media hosting url">
      <small id="settingsMediaHostingHelp" class="form-text text-muted">Due to p2p nature and limitations media files can not be transfered trough saiMessage p2p network.</br>
      Here you can set up media hosting for distribute and host your media. All your should be encrypted within your security key or DH security key.</br>
      ATTENTION! The function is temporary disabled!</br>
      </small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
` ;

_Templates.contacts = `
<h3>Serach contact at nameserver</h3>
<form id="serachContactForm">
  <div class="form-group">
    <label for="nameserver">Name server</label>
    <select class="form-control"id="nameserver" name="nameserver">
      <option>saiMessage public name server</option>
    </select>
  </div>
  <div class="form-group">
    <label for="serachContact">Search</label>
    <input type="text" class="form-control"id="serachContact" name="serachContact" placeholder=" id, name, info...">
  </div>
  <button type="submit" class="btn btn-primary">Search</button>
</form>
<searchContactSection>
</searchContactSsection>
</br>
<h3>Add contact</h3>
<form id="addContactForm">
  <div class="form-group">
    <label for="contactId">Contact id </label>
    <input type="text" class="form-control" id="contactId" name="contactId">
  </div>
  <div class="form-group">
    <label for="contactName">Contact name </label>
    <input type="text" class="form-control"id="contactName" name="contactName">
  </div>
  <div class="form-group">
    <label for="contactInfo">Additional info</label>
    <input type="text" class="form-control" id="contactInfo" name="contactInfo">
  </div>
  <button type="submit" class="btn btn-primary">Add contact</button>
</form>
</br>
<mycontactslist>
</mycontactslist>
` ;
