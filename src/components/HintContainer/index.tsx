import { useState } from 'react';

import HintButton from '@/components/HintButton';
import HintModal from '@/components/HintModal';

interface Props {
  content: string;
}

function HintContainer({ content }: Props) {
  const [isShow, setIsShow] = useState(false);
  const [isHintButtonInset, setIsHintButtonInset] = useState(false);

  return (
    <>
      {isShow && (
        <HintModal
          content={content}
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
