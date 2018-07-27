import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  border: 1px solid purple;
`;
const CentredContainer = styled(Container)`
  text-align: center;
`;
export { CentredContainer };
export default Container;
