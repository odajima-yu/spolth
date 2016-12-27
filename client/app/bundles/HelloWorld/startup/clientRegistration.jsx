import ReactOnRails from 'react-on-rails';

import '../../../../app/semantic/semantic';
import '../../../../app/semantic/semantic.less';

import HelloWorld from '../components/HelloWorld';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld
});
