// @fileoverview
// @author Torres Sacristán, Jesús <ec-tsj@gmail.org>
// @version 1.0
// @copyright XCL System
// @category System
// @package System
// @subpackage System.Base
// @filesource

/// <reference path = "../../types.d.ts" />
/// <reference path = "../../../../node_modules/@types/node/index.d.ts" />


/**
 * @Interface. Abstract Class
 */
interface ILogical {
  get original(): boolean;
  get boolean(): boolean;
  set boolean(v: boolean);
}

/**
 * @Abstract Implementation
 */
abstract class
  $ALogical
  implements ILogical, IString {
  /** @variables */
  protected _value: boolean;
  protected _original: boolean;

  /** @getters */
  get original(): boolean { return this._original; }

  get boolean(): boolean { return this._value; }

  set boolean(v: boolean) { this._value = v; }

  /** @methods */
  toString = (): string => { return this.constructor.toString().match(/\w+/g)[1]; }
}

/**
 * @class @concrete implementations
 */
class
  True
  extends $ALogical {
  // True ...
  constructor() {
    super();
    this._value = this._original = true;
  }
}

/**
 * @class @concrete implementations
 */
class
  False
  extends $ALogical {
  // False ...
  constructor() {
    super();
    this._value = this._original = false;
  }
}


