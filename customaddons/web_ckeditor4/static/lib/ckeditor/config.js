/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbar = [
        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'RemoveFormat' ] },
        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList' ] },
        { name: 'insert', items: [ 'Image', 'Table'] },
        { name: 'tools', items: [ 'Maximize'] },
        { name: 'document', items: [ 'Source'] },
    ];
};