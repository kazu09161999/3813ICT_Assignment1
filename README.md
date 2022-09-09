# 3813ICT_Assignment1
## to run frontend, npm start
## to run backend, node app.js

### GIT
Link: https://github.com/kazu09161999/3813ICT_Assignment1.git
The layout of my git repository is containing the project folder which includes frontend and backend and a README file. The default branch is called main.

### GIT version control
<img width="452" alt="image" src="https://user-images.githubusercontent.com/55030235/189446907-526f94c4-97f7-486d-9d0b-3df56547c0e1.png">
My approach to commit when I developed is commit every time, I made something like user interface, function, server, data and so on to avoid losing the data with any happening and error.

### User Login, Local storage
<img width="452" alt="image" src="https://user-images.githubusercontent.com/55030235/189446998-ae26308e-5694-4d05-ade6-94a32f08e2de.png">

### Data Structure
They must have four primary data structure which are users, groups, channels and permissions in this project but I only got two which are users and groups. 
Users is an array that has a user object. A user has username, password, id, email and role.
Groups is an array that has a group object. A group has an id, group name and channel.
The user data is stored in backend which is JSON file name users.json in backend/data

### REST API

### Angular Architecture
#### Components
User: this is where user can add, edit, delete and save the user data. 
Controller: onDelete(), onEdit(), getAllUsers(), onSave()
Login: this is the single login form, when user login, the data send to the user.json and check the input data is correct or not and if it is true, you can use this website. 
Group: this is where user can add, edit, delete and save the group data. 
Controller: onDelete(), onEdit(), getAllGroups(), onSave()
Profile: not implemented yet
Home: not implemented yet
Chat: not implemented yet


