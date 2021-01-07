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

29.)IN ChAt.js,IN "CHAT__FoOTER" div element,Add InsertEmoticon component ,form tag with onchange(that changes the input values using usestate hook),value,placeholder attributes followed by button with onClick(calls the sendmessage function) attribute init.Finally add the MicIcon componenet below the form.

30.)In chat.css,Add styles to the chat__footer section.

31.)npm i firebase

32.)create the db in cloudfire and create collections init named rooms and add documents as dance room and dev room

33.)In firebase.js,import firebase and add db,firebaseApp,auth, provider contants that is required for firebase connecetions

34.)In sidebar.js,use useeffect  hook that connects the db-collection by importing the db for getting the id and the data available init.Use map function to return the fields of db as sidebarchat component by addding the props key,name and id.call the name and id props in sidebarchat.js file

35.)In sidebarchat.js,import the db init from firebase.js file.iN createchat function include the add roomname functionality  which is to be added in db.

36.)Add cleanup funtion(unsubscribe()) in sidebar.js file.

37.)npm i react-router-dom

38.)In app.js,create the route,switch and route path tags for the chat and sidebarchat component

39.)In chat.js,call useparams()hook for roomId by importing it from react-router-dom

40.)In sidebarchat.js,add Link tag with path to the respective roomid by importing it from react-router-dom and move the "sidebarchat" class in the link tag.

41.)In chat.js,import db from firebase.js and create a usestate hook for roomname and call it in h3-tag of "chat__headerInfo" and create a useeffeck hook that connects the db based on the roomid extracted from the useparams and set the roomname as per the name given in db(data(.name)).

42.)In app.js,create "user" usestate() hook and call it in a ternary operator to check if user is logged in or not.If the user is logged in redirect the user to app else redirect the user to login page.

43.)create Login.js and login.css file under src and create the login functional component in login.js and import it in app.js as a component where the condition is user is not logged in.

44.)In Login.js,create a div tag with classname "login" followed by another div with classname "login__container" add a image init and create the div tag with classname "login__text" where h1 tag is added and create a button of material UI in it with onclick attrubute refers to signIn function.

45.)In login.css,add some styles to the div tags of login.js

46.)In Login.js,In signin function use auth and provider from firebase.js file to connect the google authentication.USe then catch method to handle errors.

Note:
Visit firebase->authentication sector-> enable google authentication for this project

47.)In index.js,wrap the app component into stateprovider(a data layer) component with initialstate and reducer props.

48.)create stateprovider.js file under src and use createContext,useContext,useReducer to create the data in data layer and pull the data from the data layer.

49.)create reducer.js file under src,add initial state,actiontypes and reducer-component init.

50.)import reducer and initialstate from reducer.js and also import stateprovider from stateprovider.js in index.js file

51.)in Login.js,use usestatevalue hook from stateprovider.js to push the user data from from to the data layer.

52.)In App.js,Use usestatevalue to get the user from google by calling it as a state.

53.)In sidebar.js,add the src to avatar that gets the photo of user from google by using the usestatevalue hook.

