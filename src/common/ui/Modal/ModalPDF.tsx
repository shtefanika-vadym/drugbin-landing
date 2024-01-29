/* eslint-disable prefer-const */
import { useCallback, useRef, type FC } from 'react';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { SET_SHOW_MODAL } from 'common/slices/modalSlice';
import { useAppDispatch } from 'common/store/hooks';
import FocusLock from 'react-focus-lock';
import { useLockedBody, useOnClickOutside } from 'usehooks-ts';
import { ContentModal, ContentPdf, PdfButton } from './Modal.styled';

import { Button } from '../Button';
import { CloseIcon, DownnloadIcon } from '../Icon/Icon';
import './modalPreviewFile.css';

const WORKER_URL =
  'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';

interface ModalPreviewFileProps {
  previewFile: string;
}

const ModalPreviewFile: FC<ModalPreviewFileProps> = ({ previewFile }) => {
  const dispatch = useAppDispatch();
  const topNavRef = useRef<HTMLElement | null>(null);
  const [locked, setLocked] = useLockedBody(true, 'root');

  const handleCloseModal = () => {
    dispatch(SET_SHOW_MODAL({ isOpenModal: false, childModal: null }));
    setLocked(!locked);
  };

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = previewFile;
    link.setAttribute('download', 'DrugBin-Solution.pdf');
    document.body.appendChild(link);
    link.click();
  }, [previewFile]);

  useOnClickOutside(topNavRef, handleCloseModal);

  return (
    <FocusLock>
      <ContentModal>
        <ContentPdf ref={topNavRef}>
          <PdfButton>
            <Button variant="white" size="S-square" onClick={handleDownload}>
              <DownnloadIcon width={24} height={24} />
            </Button>
            <Button variant="white" size="S-square" onClick={handleCloseModal}>
              <CloseIcon width={24} height={24} />
            </Button>
          </PdfButton>
          <Worker workerUrl={WORKER_URL}>
            <Viewer fileUrl={previewFile} />
          </Worker>
        </ContentPdf>
      </ContentModal>
    </FocusLock>
  );
};

export default ModalPreviewFile;
