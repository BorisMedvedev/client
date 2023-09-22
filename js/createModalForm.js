import {createFormContactItem} from './createFormContactItem.js';
import {addBtnSvg} from './svgImg.js';

export const createModalForm = (title) => {
  const form = document.createElement('form');
  const inputWrapperName = document.createElement('div');
  const inputName = document.createElement('input');
  const labelName = document.createElement('label');
  const inputWrapperSurName = document.createElement('div');
  const inputSurname = document.createElement('input');
  const labelSurName = document.createElement('label');
  const inputWrapperLastName = document.createElement('div');
  const inputLastName = document.createElement('input');
  const labelLastName = document.createElement('label');
  const contactBlock = document.createElement('div');
  const addContactBtn = document.createElement('button');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const closeBtn = document.createElement('button');
  const modalTitle = document.createElement('h2');


  form.classList.add('form-client');
  inputWrapperName.classList.add('text-field');
  inputName.classList.add('text-field__inp');
  labelName.classList.add('text-field__placeholder');
  inputWrapperSurName.classList.add('text-field');
  inputSurname.classList.add('text-field__inp');
  labelSurName.classList.add('text-field__placeholder');
  inputWrapperLastName.classList.add('text-field');
  inputLastName.classList.add('text-field__inp');
  labelLastName.classList.add('text-field__placeholder');
  addContactBtn.classList.add('btn-reset', 'add-contact', 'active');
  contactBlock.classList.add('contact-block');
  saveBtn.classList.add('btn-reset', 'site-btn', 'save-btn');
  cancelBtn.classList.add('btn-reset', 'add-contact');
  closeBtn.classList.add('btn-reset', 'close-btn');
  modalTitle.classList.add('modal-title');


  inputName.type = 'text';
  inputSurname.type = 'text';
  inputLastName.type = 'text';

  labelName.textContent = 'Имя';
  labelSurName.textContent = 'Фамилия';
  labelLastName.textContent = 'Отчество';
  addContactBtn.textContent = 'Добавить контакт';
  saveBtn.textContent = 'Сохранить';
  cancelBtn.textContent = 'Отменить';
  modalTitle.textContent = title;


  contactBlock.append(addContactBtn);
  inputWrapperName.append(inputName, labelName);
  inputWrapperSurName.append(inputSurname, labelSurName);
  inputWrapperLastName.append(inputLastName, labelLastName);

  form.append(
      inputWrapperSurName,
      inputWrapperName,
      inputWrapperLastName,
      contactBlock,
      saveBtn,


  );

  addContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Создаем новый контакт
    const contactitem = createFormContactItem();
    contactBlock.prepend(contactitem.contact);

    // Проверяем текущее количество контактов после добавления нового
    const updatedContacts = document.getElementsByClassName('contact');

    // Если контактов меньше или равно 9, то удаляем класс 'active'

    if (updatedContacts.length === 5) {
      addContactBtn.classList.remove('active');
    }
  });

  return {
    form,
    inputName,
    inputSurname,
    inputLastName,
    contactBlock,
    addContactBtn,
    saveBtn,
    cancelBtn,
    closeBtn,
    modalTitle,
  };
};

