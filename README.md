1.)create firebase.js file under src folder and paste he config section from firebase

2.)Delete app.test.js,logo.svg,setup.test.js files

3.)delete content of App.css and In index.js file,add margin=0 for every content(*)

4.)In App.js,rename the classname to "app" and add a  div with classname app__body 

5.)Add css styles to app and app__body class

6.)create sidebar.js and sidebar.css file under src.create the sidebar functional component that return just "sidebar" as h1 tag and call it in app.js file as a component.

7.)add three div tags with classname "sidebar__header"."sidebar__search"and "sidebar__chats" respectivly under "sidebar" div tag in sidebar.js file.

9.)Install:
            $ npm install @material-ui/core//will install dependencies and components of material ui
            $ npm install @material-ui/icons//will install icons 

10.)import  avatar and IconButton(it adds effects to the button onclick/hover) component from materialuicore in  sidebar.js file and call the avatar component under sidebar__header div tag and add a new div tag with classname="sidebar__headerRight" under avatar component.

11.)In sidebar.js,In "sidebar__headerRight" div tag, add the  DonutLargeIcon,MoreVertIcon and ChatIcon component under each IconButton component.

12.)Add css styles to sidebar,sidebar__header,sidebar__headerRight,sidebar__headerRight >.MuiSvgIcon-root(to overwrite the material ui icon) in sidebar.css file.

13.)In sidebar.js,In sideebar__search div tag, add div tag with classname as "sidebar__searchContainer"  init.Wrap SearchOutlined icon and input box init.Finally add css styles to sidebar,sidebar__search,sidebar__searchContainer,sidebar__searchContainer > .MuiSvgIcon-root ,sidebar__searchContainer > input in sidebar.css file.

14.)create sidebarchat.js and sidebarchat.css file under src folder.create a functional component in sidebarchat.js and import it as a component in sidebar.js under "sidebar__chat" div element.

15.)In sidebar.css,add some styles to sidebar__chats dive element

16.)Add the avatar component in sidebarchat.js under the "sidebarchat" div element.Add add a div element  with class name as "sidebarchat__info" under avatar component.Add src("https://avatars.dicebear.com/4.5/api/male/fds.svg") attribute to the avatar component to show some images on it.

17.)Add useEffect and usestate hooks in sidebarchat.js file that generates  random number whenever the component loads and call it in avatar src

18.)In sidebarchat.css ,add some css styles

19.)In sidebarchat.js,add a prop(addnewchat) and call the prop in the sidebar.js.create a ternary operator that returns if addnewchat is called in the component(sidebar.js) return the AddNewchat-h2 tag under a div element with onclick attribute(createchat).Else return the div element of exixting one(room name and last message).

20.)In sidebarchat.js,create the function(createChat)  that stores the room name in constant(roomName) for doing Db stuffs when clicked on AddNewChat.

21.)create chat.js file under src and create the Chat functional  component with div element whose className="chat" and call it in app.js

22.)create a chat.css file in src and import it in chat.js file.

23.)In chat.js,Under "chat" div element,create 3 div elements with className as chat__header,chat__body and chat__footer init.

24.)In chat.js,Under "chat__header" div element,use the Avatar componenet and create the 2 div elements with classname "chat__headerInfo" and "chat__headerRight".

25.)iN Chat.js,Use the respective icons on the "chat__headerRight" div element by import its componenets from the materialUi.and in "chat__headerInfo" call the lastseen(p) and roomname(h3) tags init.

26.)In chat.css ,add styles to the header section of chats.

27.)In chat.js,In "chat__body" div element ,add p-tag  with classname as "chat__message"(message from receiver) and "chat__reciever"(message to reciver),call a span-tag with calssname="chat__name"(defines the user name).Write a message after the span-tag and create another span-tag with className="chat__timestamp" that defines the time.

28.)In chat.css,Add styles to the chat__body section.