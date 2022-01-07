import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogOverlay,
  DialogContent,
} from '@heathmont/moon-components';

import Frame from 'react-frame-component';

import Preview from '../../components/codePreview/Preview';
import Default from '../../components/tailwind/sidebar';
import useExamples from '../../utils/useExamples';

export default function PageAvatar() {
  const [showDialog, setShowDialog] = React.useState(false);
  const position = 'CENTER'; // or 'TOP'
  const maxWidth = '760px';

  //   const examples = useExamples('avatar');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Sidebar</h1>
        <p className="text-lg mt-4">Lorem</p>
      </section>

      {/* <Preview title="Sidebar" preview={<Default />} code={'Loading'} /> */}

      <section className="relative mt-8 App">
        <Button variant="primary" onClick={() => setShowDialog(true)}>
          Open Dialog
        </Button>

        <Dialog
          isOpen={showDialog}
          onDismiss={() => setShowDialog(false)}
          maxWidth="100%"
          position="TOP"
          hideCloseButton
          variant="new"
        >
          <Default />
        </Dialog>

        {/* <DialogOverlay
          isOpen={showDialog}
          onDismiss={() => setShowDialog(false)}
        >
          <DialogContent variant="new" maxWidth="100%" position={position}>
            <Default />
          </DialogContent>
        </DialogOverlay> */}
      </section>
    </>
  );
}
