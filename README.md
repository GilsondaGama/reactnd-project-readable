<p align="center"><a href="https://in.udacity.com/course/react-nanodegree--nd019" target="_blank"><img width="180" src="https://www.wykop.pl/cdn/c3397993/link_SIrKotPCldE7IGnWEjOBSIX1SDMEhE1w,w300h223.jpg" alt="My Reads"></a></p>

<h1 align="center">Readable Project - Udacity Nanodegree</h1>
**Programming assignment for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) program.**

---

> For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

Built with React, Redux and React Router. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
For this assignment there was no starter template provided (apart from the simple backend API).

## Limitations and things that are missing

The assignment did not specify any use of authentication. From the API provided, each user has access to its own set of posts and comments, and can modify or delete any entry.

The focus of the assignment was on functionality, rather than styling, so I did not spend so much time building the UI (no animations, few loading messages, etc). Also, this project has no automated tests.

Lastly, as this was a Redux assignment, it was required that **all** state lives inside Redux, even if it would make more sense to store it locally on a component.


<p align="center">

## Stack
- React & Redux
- Redux Thunk
- Material UI
- ESLint AirBnb



## Start Developing

To get started developing right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, use Create React App to scaffold out the front-end
    - `create-react-app frontend`
    - `cd frontend`
    - `npm start`


