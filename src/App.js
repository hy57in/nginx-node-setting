import React, { Component } from 'react';
import CameraTest from './CameraTest'
import ImageClassifier from './ImageClassifier'
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
  <div class="container header__container">
<div class="header__logo"><img class="header__img" src="https://image.ibb.co/kcVou6/path3000.png" /> <h1 class="header__title">Helmet<span class="header__light">.Detection</span></h1></div> 
     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
  
  <div class="header__menu">
    <nav id="navbar" class="header__nav collapse">
      <ul class="header__elenco">
        <li class="header__el"><a href="#" class="header__link">Home</a></li>
        <li class="header__el"><a href="#" class="header__link">Pricing</a></li>
        <li class="header__el"><a href="#" class="header__link">Success stories</a></li>
        <li class="header__el"><a href="#" class="header__link">Blog</a></li>
        <li class="header__el"><a href="#" class="header__link">Contact us</a></li>
        <li class="header__el header__el--blue"><a href="" class="btn btn--white">Sign In →</a></li>
      </ul>
    </nav>
  </div>
    </div>
    <div class="sect sect--padding-top">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
    <div class="site">
      <h1 class="site__title">Helmet Detection</h1>
      <h2 class="site__subtitle">헬멧을 썼는지 판별하기 위해 캡쳐 버튼을 눌러주세요</h2>
      <div class="site__box-link">
      </div>
        <CameraTest className='site__img'></CameraTest>
    </div>
    </div>
    </div>
  </div>
</div>
        {/*<ImageClassifier></ImageClassifier>*/}
      </div>
    );
  }
}

export default App;
