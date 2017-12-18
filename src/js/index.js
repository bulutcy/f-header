/**
 * @overview Fozzie header JavaScript behaviour.
 *
 * @module f-header
 */

import ready from 'lite-ready';
import setupHeader from './accessibleHeader';
import template from './template';


ready(() => {
    setupHeader();
});

export default template;

export {
    setupHeader
};
