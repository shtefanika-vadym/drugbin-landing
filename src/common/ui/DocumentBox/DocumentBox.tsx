import { Content, Icon, Text } from './DocumentBox.styled';
import documnetIcon from 'common/assets/doc.svg';

interface DocumentBoxProps {
  name: string;
}

export const DocumentBox: React.FC<DocumentBoxProps> = ({ name }) => {
  return (
    <Content>
      <Icon src={documnetIcon} alt="" />
      <Text>{name}</Text>
    </Content>
  );
};
