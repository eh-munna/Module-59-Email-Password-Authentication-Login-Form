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

## 59-3 Use Bootstrap and React Bootstrap Form for Register

- Remove tailwind and install react bootstrap to practice with bootstrap

## 59-4 Create new user using email and password on firebase

### Create User

- Create project on firebase
- Register the app
- Configure the config file
- Sign-in method should be email password
  - As we are signing in with Native providers
- New user : so we would use `createUserWithEmailAndPassword`

### onSubmit = ()

- To submit the form and it's data we should use onSubmit method

## 59-5 Login form field validation using regular expression

### required

- The required attribute is a boolean attribute. When present, it specifies that an input field must be filled out before submitting the form

### reset

- Reset method will clear the form

### validation

- we use regular expression (regex) for form validation
- _regexVariable_.test(_yourVariable_) method will be applied to check
- [Explanation of regex](https://dev.to/ayka_code/how-to-validate-password-strength-using-regex-and-javascript-4083)

## 59-6 (Recap) Create Login page and recap validation

- Recap

## 59-7 Sign In, Login, Toggle Registration and login, Handle Email Verification

### signInWithEmailAndPassword

- Password validation is not necessary here as they were already validate during registration

### sendEmailVerification

- Method will take the whole whole user and send verification mail to the user's email. After successful verification user can create account

## 59-8 Forget or Reset Password and Update user name to firebase

### useRef

- This method is a react hook and use for different purpose. Holding value is a use case of useRef
- **current:** Initially, it’s set to the **initialValue** we have passed. We can later set it to something else
- Most important, **Changing a ref does not trigger a re-render.** This means refs are perfect for storing information that doesn’t affect the visual output of your component
- To pass the reference of the whole input field to the useRef we would use react's ref as props of the input field

### sendPasswordResetEmail

- use for password resetting

### updateProfile

- use for updating profile name and photo
- Not possible to update other info this way
