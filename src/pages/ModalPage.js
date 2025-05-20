import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        turpis vel velit placerat sagittis nec non quam. Mauris rhoncus, orci
        nec volutpat porttitor, est velit elementum tortor, nec elementum justo
        orci ut enim. Proin gravida hendrerit elit, sit amet euismod odio
        porttitor sit amet. Integer convallis faucibus fringilla. Cras lorem
        mauris, fringilla quis laoreet quis, semper a lorem. Donec nec ultricies
        dolor, lacinia vestibulum tellus. Praesent facilisis ultricies nisi,
        convallis mollis ex consequat vitae. Proin et dignissim sem, eget
        posuere lacus. Nullam sed tortor vel orci laoreet laoreet ac at tellus.
        Aliquam tincidunt ipsum quis dolor feugiat pharetra varius ut lacus.
        Suspendisse ornare metus id congue fringilla.
      </p>
    </div>
  );
}

export default ModalPage;
