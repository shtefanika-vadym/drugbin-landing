import { useCollectState } from 'common/hooks/useCollectState';
import { useRef } from 'react';
import { CameraOpen } from './Camera.styled';

function CameraComponent() {
  const fileInputRef = useRef(null);
  const { addDrugsFromArray } = useCollectState();

  const handleFileChange = (event: any) => {
    const file = event?.target?.files[0];
    addDrugsFromArray(mock_data);
    // Do something with the selected file
    console.log('Selected file:', file);
  };

  const handleClick = () => {
    // Click the hidden file input element to trigger file selection
    fileInputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        capture={true}
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <CameraOpen onClick={handleClick}>Deschide</CameraOpen>
    </>
  );
}

export default CameraComponent;

export const mock_data: any = [
  {
    drugName: {
      value: 'AULIN 100 mg',
      name: 'AULIN 100 mg',
      packaging: 'Cutie cu blist. Al/PVC x 6 compr.',
      drugId: 3313,
      isPsycholeptic: false,
    },
    pack: 'Cutie',
    quantity: 1,
    expirationDate: null,
    lot: '',
  },
  {
    drugName: {
      value: 'SILIMARINA BIOFARM',
      name: 'SILIMARINA BIOFARM',
      packaging: 'Cutie cu 4 blist. PVC/Al x 20 compr.',
      drugId: 25414,
      isPsycholeptic: false,
    },
    pack: 'Cutie',
    quantity: 1,
    expirationDate: null,
    lot: '',
  },
  {
    drugName: {
      value: 'AZITROMICINA SANDOZ 200 mg/5 ml',
      name: 'AZITROMICINA SANDOZ 200 mg/5 ml',
      packaging:
        'Cutie cu 1 flac. PEID + 1 seringa dozatoare din PE/PP (10 ml) gradata in diviziuni de 0,25 ml continand pulb. pt 15 ml (600 mg) susp. orala',
      drugId: 3462,
      isPsycholeptic: false,
    },
    pack: 'Cutie',
    quantity: 1,
    expirationDate: null,
    lot: '',
  },
  {
    drugName: {
      value: 'ADVIL 200 mg',
      name: 'ADVIL 200 mg',
      packaging: 'Cutie cu 1 blist. Al/PVC x 10 draj.',
      drugId: 691,
      isPsycholeptic: false,
    },
    pack: 'Blister',
    quantity: 1,
    expirationDate: null,
    lot: '',
  },
  {
    drugName: {
      value: 'NALGESIN 220 mg',
      name: 'NALGESIN 220 mg',
      packaging: 'Cutie cu blist. PVC/Al x 10 compr. film.',
      drugId: 18427,
      isPsycholeptic: false,
    },
    pack: 'Cutie',
    quantity: 1,
    expirationDate: null,
    lot: '',
  },
  {
    drugName: {
      value: 'CALCIU LACTIC, compr.',
      name: 'CALCIU LACTIC, compr.',
      packaging: null,
      drugId: 35656,
      isPsycholeptic: false,
    },
    pack: 'Blister',
    quantity: 1,
    expirationDate: null,
    lot: '',
  },
];
