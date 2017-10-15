import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://en.wikipedia.org/wiki/My_Little_Pony" style={{"color": "#ff28b1"}}>Unicorns</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
