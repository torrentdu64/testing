import jsom from 'jsom';



global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defauldView;
