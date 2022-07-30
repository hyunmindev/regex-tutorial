import { useState } from 'react';

import HintButton from '@/components/HintButton';
import HintModal from '@/components/HintModal';

function HintContainer() {
  const [isShow, setIsShow] = useState(false);
  const [isHintButtonInset, setIsHintButtonInset] = useState(false);

  return (
    <>
      {isShow && (
        <HintModal
          content="WIP"
          onCloseBegin={() => {
            setIsHintButtonInset(false);
          }}
          onCloseEnd={() => {
            setIsShow(false);
          }}
        />
      )}
      <HintButton
        inset={isHintButtonInset}
        onClick={() => {
          setIsShow(true);
          setIsHintButtonInset(true);
        }}
      />
    </>
  );
}

export default HintContainer;
