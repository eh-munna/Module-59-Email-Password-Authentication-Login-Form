# Module-59-Email-Password-Authentication-Login-Form

## 59-1 Email password Authentication project setup

### Set up the routing and create basic forms

- Create Login Page
- Create SignUp from for registering new user

## 59-2 Simple form, input, change, blur, submit, preventDefault

### Collecting data from form

#### onChange

- Always monitor whatever change on the page, and by default give us a parameter where we can find the events
  - **target** : here we can see the targeted event where something is changing
    - **value** : inside the target there is the changing value from the form
- trigger whenever every state change

#### onBlur

- When input field is not focused then this state is called blur
- trigger when focus state changes

#### preventDefault

- By default form reload the page, and to prevent it we use preventDefault
