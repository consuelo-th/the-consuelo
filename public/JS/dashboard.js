/* Camera functionality */
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let retakeBtn = document.getElementById("retake");

camera_button.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
});

click_button.addEventListener("click", function () {
  canvas.style.display = "block";
  video.style.display = "block";

  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");

  // data url of the image
  console.log(image_data_url);
});

retakeBtn.addEventListener("click", function () {
  canvas.style.display = "none";
  video.style.display = "block";
});

// Accept Patient prompt
let acceptBtn = document.querySelectorAll(".accept_appt");
for (let i = 0; i < acceptBtn.length; i++) {
  acceptBtn[i].addEventListener("click", () => {
    let acceptModal = document.getElementById("acceptModal");
    acceptModal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      acceptModal.style.display = "none";
    };
  });
}

// View Patient prompt
let viewBtn = document.querySelectorAll(".view_appt");
for (let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", () => {
    let viewModal = document.getElementById("viewModal");
    viewModal.style.display = "block";

    var close = document.getElementsByClassName("close")[1];
    close.onclick = function () {
      viewModal.style.display = "none";
    };
  });
}

// Cancel Patient prompt
let cancelBtn = document.querySelectorAll(".cancel_appt");
for (let i = 0; i < cancelBtn.length; i++) {
  cancelBtn[i].addEventListener("click", () => {
    let cancelModal = document.getElementById("cancelModal");
    cancelModal.style.display = "block";

    var close = document.getElementsByClassName("close")[2];
    close.onclick = function () {
      cancelModal.style.display = "none";
    };
  });
}

// Complete Profile Prompt
let completeProfile = document.getElementById("complete_profile");
completeProfile.onclick = function () {
  let completeModal = document.getElementById("completeModal");
  completeModal.style.display = "block";

  //Submit Profile prompt
  let submitProfile = document.getElementById("submit_profile");
  let submitProfileModal = document.getElementById("submitprofile_modal");
  submitProfile.onclick = function () {
    submitProfileModal.style.display = "block";

    let close = document.getElementsByClassName("close")[4];
    close.onclick = function () {
      submitProfileModal.style.display = "none";
      completeModal.style.display = "none";
    };
  };

  //Selfie prompt
  let selfie = document.getElementById("selfie");
  let selfieModal = document.getElementById("selfieModal");
  let submitSelfie = document.getElementById("submit_selfie");
  let selfieSuccessful = document.getElementById("selfieSuccessModal");
  selfie.onclick = function () {
    completeModal.style.display = "none";
    selfieModal.style.display = "block";

    submitSelfie.onclick = function () {
      selfieSuccessful.style.display = "block";
    };

    let close = document.getElementsByClassName("close")[3];
    close.onclick = function () {
      selfieSuccessful.style.display = "none";
      selfieModal.style.display = "none";
      completeModal.style.display = "block";
    };

    let backBtn = document.getElementById("back_btn");
    backBtn.onclick = function () {
      completeModal.style.display = "block";
      selfieModal.style.display = "none";
    };
  };

  //Address prompt
  let contactAddress = document.getElementById("contact_address");
  let contactAddressModal = document.getElementById("contact_addressModal");
  let submitAddress = document.getElementById("submit_address");
  let submitAddressModal = document.getElementById("submitaddress_modal");
  contactAddress.onclick = function () {
    completeModal.style.display = "none";
    contactAddressModal.style.display = "block";

    submitAddress.onclick = function () {
      submitAddressModal.style.display = "block";
    };

    let close = document.getElementsByClassName("close")[5];
    close.onclick = function () {
      submitAddressModal.style.display = "none";
      contactAddressModal.style.display = "none";
      completeModal.style.display = "block";
    };

    let backBtn1 = document.getElementById("back_btn1");
    backBtn1.onclick = function () {
      completeModal.style.display = "block";
      contactAddressModal.style.display = "none";
    };
  };

  //certifications prompt
  let certifications = document.getElementById("certifications");
  let certificationsModal = document.getElementById("certifications_modal");
  let submitCertifications = document.getElementById("submit_certifications");
  let submitCertificationsModal = document.getElementById(
    "submitcertifications_modal"
  );
  certifications.onclick = function () {
    completeModal.style.display = "none";
    certificationsModal.style.display = "block";

    submitCertifications.onclick = function () {
      submitCertificationsModal.style.display = "block";
    };

    let close = document.getElementsByClassName("close")[6];
    close.onclick = function () {
      submitCertificationsModal.style.display = "none";
      certificationsModal.style.display = "none";
      completeModal.style.display = "block";
    };

    let backBtn2 = document.getElementById("back_btn2");
    backBtn2.onclick = function () {
      completeModal.style.display = "block";
      certificationsModal.style.display = "none";
    };
  };

  //Contact prompt
  let contact = document.getElementById("contact");
  let contactModal = document.getElementById("contact_modal");
  let submitContact = document.getElementById("submit_contact");
  let submitContactModal = document.getElementById("submitcontact_modal");
  contact.onclick = function () {
    completeModal.style.display = "none";
    contactModal.style.display = "block";

    submitContact.onclick = function () {
      submitContactModal.style.display = "block";
    };

    let close = document.getElementsByClassName("close")[7];
    close.onclick = function () {
      submitContactModal.style.display = "none";
      contactModal.style.display = "none";
      completeModal.style.display = "block";
    };

    let backBtn3 = document.getElementById("back_btn3");
    backBtn3.onclick = function () {
      completeModal.style.display = "block";
      contactModal.style.display = "none";
    };
  };
};

// Drag and drop funtionality
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

// Show drag and drop thumbnail
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}
