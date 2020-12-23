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