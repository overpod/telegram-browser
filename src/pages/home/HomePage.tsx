import { FixedLayout, Input, List } from '@telegram-apps/telegram-ui';
import { css } from '@linaria/core';
import { useI18nContext } from '../../i18n/i18n-react';

const headerStyle = css`
  padding: 10px;
  background-color: var(--tg-theme-secondary-bg-color);
  border-bottom: solid 1px #e4e4e4 var(--tg-theme-bottom-bar-bg-color);
`;

const bodyStyle = css`
  margin-top: 50px;
`;

export const HomePage = () => {
  const { LL } = useI18nContext();
  return (
    <>
      <FixedLayout vertical="top" className={headerStyle}>
        <Input header="Input" placeholder={LL.HEADER_QUERY()} />
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
