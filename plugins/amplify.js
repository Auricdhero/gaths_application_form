import '@aws-amplify/ui-components';
import {
    applyPolyfills,
    defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import Vue from 'vue';

Vue.config.ignoredElements = [/amplify-\w*/];


applyPolyfills().then(() => {
    defineCustomElements(window);
});