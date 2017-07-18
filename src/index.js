import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import registerServiceWorker from './registerServiceWorker';

class AframePage extends React.Component{
    render(){
        return(
            <div>
             <Scene>
              <a-assets>
                <a-asset-item id="launchdemo-obj" src="models/LaunchDemo.obj"></a-asset-item>
                <a-asset-item id="launchdemo-mtl" src="models/LaunchDemo.mtl"></a-asset-item>
              </a-assets>
              <a-entity obj-model="obj: #launchdemo-obj; mtl: #launchdemo-mtl;"
              scale="0.04 0.04 0.04"
              rotation="0 0 0"
              position="-2 0 0">
              </a-entity>
            </Scene>
            </div>
        );
    }
}

ReactDOM.render(<AframePage />, document.getElementById('root'));
registerServiceWorker();
