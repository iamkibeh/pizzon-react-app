# Pizza-in

A react application that displays the meals available in a restaurant and their cost as well as customer reviews. Customers also have free will to book reservations on the application. A user logs in, searches for a meal they want, add the meal to cart and pay for the meals.

##### By **Kibet Immanuel Ng'eno**

## Table of Content

- [Description](#description)
- [SetupInstallation Requirements](#setupinstallation-requirement)
- [Known-bugs](#known-bugs)
- [Technology Used](#technologies-used)
- [Contributing](#contributing)
- [Support and contact details](#support-and-contact-details)
- [Licence](#license)

## Description

Pizza-in-resort is an application that allows customers to view the menu and place an order, add the meal they require to cart, book reservations for table meals anytime.

## Link to the website

- Netlify deployed site [click here](https://pizza-in-resort.netlify.app/)
- Live demo link [click here](https://drive.google.com/file/d/1y27Iwm6Yzrq2kFIlTvKrKttENug77JGD/view)
- API link [click here](http://localhost:3000)

## Setup/Installation Requirement

1. On Github.com page navigate to the spoon-knife icon on the repository on the top right.This will fork the repo to your username.
2. clone the repository to your local folder using the command "git clone ...<repository name>"
3. press enter and your local clone will have been created.

```
$git clone 'url'
>cloning into `repository name`
> remote: Counting objects:`number of files`
> remote: Compressing objects: 100%
> Unpacking objects: 100% ,done
```

4. you now have the repository in your local machine.
5. run npm install to install all the dependencies that were ignored by git.
6. using your code editor, preferably vs code, open your terminal and run the following command preferably if you have json server installed otherwise run these two commands:

```
npm install -g json-server
json-server --watch db.json
```

7. press enter to run the command and host json server locally in your machine.
8. something similar to this would be displayed in your terminal

```
$ json-server --watch db.json

  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/meals
  http://localhost:3000/categories

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

```

8. You can then start the react application with the command:

```
npm start
```

this will ask you to run the react app on a different port because port 3000 which is the default port is in use by json server. press y. 9. The application is now up and running.

> note that you do not need any dependencies to run this application. Provided you create a json server to watch the json file containing the data and the application is up and running.

[Go Back to top](#table-of-content)

#### Requirements

1. An access to the Internet
2. Either a computer,phone,tablet or an Ipad
3. Git and Github account
4. Node js runtime env
5. npm installed

## Known Bugs

Login details are not stored in the database.

## Technologies Used

- HTML
- CSS
- JavaScript
- React fundamentals
- Advanced React Hooks

[Go Back to top](#table-of-content)

## Contributing

Feel free to create a pull request. It is highly welcomed and if you wish to share any information or concerns of what should be implemented in the project the floor is yours to open an issue on changes you would wish to be made.
If you are new to the contribution world click on this [link](https://github.com/freeCodeCamp/how-to-contribute-to-open-source/blob/main/CONTRIBUTING.md) and follow the guide documented. Congratulations to joining contribution world.

[Go Back to top](#table-of-content)

## Future implementations

I am looking forward to implementing database such as mySQL or MongoDb to store the login details of a user and authenticate them whenever they are logged in. Besides, I am looking forward to making this application a full on application with Ruby as its back end language.

## Support and contact details

Incase you encounter any bug or issue, feel free to reach us out at our support team [support](https://pizza-in-resort.netlify.app/#).
You can also contact us [+254716246708](tell:+254716246708). Alternatively, you can make a contribution to the project as mentioned earlier.

### Questions?

Twitter: [@IamKibeh](https://twitter.com/IamKibeh)
Email: [kibetimmanuel0@gmail.com]()
LinkedIn: [Kibet Immanuel]()

### License

[MIT](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Go to top](#table-of-content)

Copyright (c) {2022} **{Pizza-in-resort}**
