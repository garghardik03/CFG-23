'use client';
import { useState } from 'react';

import { Button, Modal } from 'flowbite-react';

export default function ModalForm(prop) {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal('dismissible')}>{prop.btn}</Button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>{prop.btn}</Modal.Header>
        <Modal.Body>
{prop.body}
        </Modal.Body>
        
      </Modal>
    </>
  )
}


