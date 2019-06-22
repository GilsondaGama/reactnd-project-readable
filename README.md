<p align="center"><a href="https://in.udacity.com/course/react-nanodegree--nd019" target="_blank"><img width="180" src="https://www.wykop.pl/cdn/c3397993/link_SIrKotPCldE7IGnWEjOBSIX1SDMEhE1w,w300h223.jpg" alt="My Reads"></a></p>

<h1 align="center">Readable Project - Udacity Nanodegree</h1>

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
- Material-UI
- ESLint AirBnb
- Axios
- Lodash
- Prop-types
- Material-Ui Form Validator

## Installation

Install all necessary modules to run the current project.

```bash
$ git clone https://github.com/GilsondaGama/ReactND-Project-Readable
$ cd reactnd-project-readable/
$ npm install
$ cd api-server/
$ npm install
```

## Development

First, start the API backend. It will be served on `http://localhost:5001/api/`:

```bash
$ cd reactnd-project-readable/api-server/
$ node server
```

Then, go back to the root of the project and run the development server in another terminal.
The app will be served with live reloading on `http://localhost:3000`.

```bash
$ cd reactnd-project-readable/
$ npm start
```

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Contributors

- Gilson da Gama ([gilsondagama](https://github.com/GilsondaGama))

## License

This project is licensed under the MIT License. Check the `LICENSE` file.
