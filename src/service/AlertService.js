import React from 'react'
import swal from 'sweetalert';

const successAlert = (title,message,type ,url) => {
    swal(
      {
        title: title,
        text: message,
        icon: type,
        timer: 9000,
        buttons: false,
      }
    ) 
    .then(() => {
        window.location.href = url;
    })
}

export default {
	showSuccessAlert: successAlert,
}