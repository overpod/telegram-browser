import { Button, FixedLayout, List } from '@telegram-apps/telegram-ui';
import { css } from '@linaria/core';

const bodyStyle = css`
  margin-top: 50px;
`;

export const HomePage = () => {
  return (
    <>
      <FixedLayout vertical="top">
        <Button size="l" stretched>
          This is FixedLayout with top vertical
        </Button>
      </FixedLayout>

      <List className={bodyStyle}>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
        <p>dsfgdffg</p>
      </List>
    </>
  );
};
