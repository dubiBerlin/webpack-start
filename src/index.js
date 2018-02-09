import _ from 'lodash';
import './style.css';
import Icon from './guppylution-logo.png';

  function component() {
    var element = document.createElement('div');

  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Adding image to existing div
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    return element;
  }

  document.body.appendChild(component());
