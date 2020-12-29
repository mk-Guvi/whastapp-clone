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