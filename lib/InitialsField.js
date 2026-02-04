'use strict';

var FormField = require('./FormField');
var Signable = require('./Signable');
var Requireable = require('./Requireable');


/**
 *
 *
 * @constructor
 */
function InitialsField() {
  Signable.call(this);
  Requireable.call(this);

  FormField.call(this);

  this.setWidth(43);
  this.setHeight(43);
  this.setRequired(false);

  var parentObject = this.toObject;
  this.toObject = function () {
    return Object.assign(this, parentObject.call(this));
  };

}

module.exports = InitialsField;
