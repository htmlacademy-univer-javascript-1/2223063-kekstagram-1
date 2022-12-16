import './rendering.js';
import './data.js';
import './bigPicture.js';
import './hashtag.js';
import './uploadFile.js';
import './photoEffects.js';
import './photoScaling.js';
import './server.js';

import { renderPhotos } from './rendering.js';
import { sendRequest } from './server.js';
import { showAlert } from './util.js';

const onSuccess = (data) => {
  renderPhotos(data);
};

const onFail = (error) =>{
  showAlert(error);
};

const method = 'GET';

sendRequest(onSuccess, onFail, method);
