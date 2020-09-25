import _ from 'lodash'

function component() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'Webpack'], ' ')

    return element
}

document.body.appendChild(component())

console.log("Loading the webpack file via NPM script and finished getting started")