import {createClientsHeader} from './createHeader.js';
import {createModalWindow} from './addClients.js';
import {createSectionMain} from './createSectionMain.js';

const createApp = () => {
  const header = createClientsHeader();
  const main = createSectionMain();
  const modal = createModalWindow();

  document.body.append(header, main.main);

  main.addClientBtn.addEventListener('click', () => {
    document.body.append(modal);
  });
};

createApp();
