import ReactOnRails from 'react-on-rails';

import '../../../../app/semantic/semantic';
import '../../../../app/semantic/semantic.less';

import HeaderMenu from '../containers/HeaderMenu';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HeaderMenu
});
