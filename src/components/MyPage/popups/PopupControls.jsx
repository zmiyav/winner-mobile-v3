import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useOnClickOutside } from '../../../helpers/functions';

export default function PopupControls({
  children,
  onClose,
  onClick,
  buttonChild,
  isPopupOpen,
  setPopupOpen,
  isNotFullScreen,
  hasMargin,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const handler = useCallback(() => {
    if (open) {
      setOpen(false);
      if (onClose) {
        onClose();
      }
    }

    if (open && !isPopupOpen) {
      setOpen(false);
    }
  }, [isPopupOpen, onClose, open]);

  useEffect(() => {
    setPopupOpen(true);
  }, [setPopupOpen]);
  useOnClickOutside(ref, handler);

  useEffect(() => {
    if (open && !isPopupOpen) {
      setOpen(false);
      setPopupOpen(true);
    }
  }, [open, isPopupOpen, setPopupOpen]);

  function onHeaderClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      // handle
      setOpen(false);
    }
  }
  return (
    <div style={{ marginTop: '1.188rem', marginRight: '-0.813rem' }}>
      <div
        className="flex items-center justify-center "
        style={{ margin: hasMargin ? '-1.8rem 0rem 0 0.6rem' : '' }}
        onMouseDown={() => {
          if (onClick) onClick();
          setOpen(true);
        }}
      >
        {buttonChild}
      </div>
      {open && (
        <div
          style={{ zIndex: '9999', position: 'fixed', left: '0', top: '0' }}
          // style={{ zIndex: '10000', position: 'fixed', right: '0', top: '0', paddingLeft: '-2rem' }}
          className={`fixed flex items-center justify-center w-screen ${
            isNotFullScreen ? 'overflow-y-scroll' : ''
          } h-screen bg-black bg-opacity-80 z-50 left-0 top-0 popup-page`}
          onClick={(e) => onHeaderClick(e)}
        >
          {/* <div style={{ marginTop: '8.25rem' }}>{children}</div> */}
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}
