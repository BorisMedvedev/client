import {createModalForm} from './createModalForm.js';

export const createModalWindow = () => {
  const modalForm = createModalForm('Новый клиент');
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');

  modal.classList.add('modal');
  modalContent.classList.add('modal__content');

  modalContent.append(
      modalForm.modalTitle,
      modalForm.closeBtn,
      modalForm.form,
      modalForm.cancelBtn,
  );
  modal.append(modalContent);

  document.addEventListener('click', (e) => {
    if (e.target === modalForm.closeBtn ||
       e.target === modal ||
       e.target === modalForm.cancelBtn) {
      modal.remove();
    }
  });

  modalForm.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const contacts = [];
    const clientObj = {};

    clientObj.name = modalForm.inputName.value;
    clientObj.surname = modalForm.inputSurname.value;
    clientObj.lastname = modalForm.inputLastName.value;
    clientObj.contacts = contacts;
    modalForm.inputName.value = '';
    modalForm.inputSurname.value = '';
    modalForm.inputLastName.value = '';

    modal.remove();
  });

  return modal;
};
