import { useState } from 'react';

import HintButton from '@/components/HintButton';
import HintModal from '@/components/HintModal';

function HintContainer() {
  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => setIsShow(!isShow);

  return (
    <>
      {isShow && (
        <HintModal
          content="WIP"
          onClose={toggleModal}
        />
      )}
      <HintButton
        inset={isShow}
        onClick={toggleModal}
      />
    </>
  );
}

export default HintContainer;
