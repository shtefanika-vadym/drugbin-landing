import { Metadata } from 'common/Metadata/Metadata';
import { CollectHeader } from 'common/layout/CollectHeader/CollectHeader';
import { Collect } from 'components/collect/Collect';

export const CollectPage = () => {
  return (
    <Metadata
      title="DrugBin"
      description="Descoperiți centrele din apropiere pentru eliminarea în siguranță a medicamentelor expirate sau neutilizate. Alăturați-vă mișcării pentru o comunitate mai curată."
    >
      <CollectHeader>
        <Collect />
      </CollectHeader>
    </Metadata>
  );
};
