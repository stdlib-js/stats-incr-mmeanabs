/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var abs = require( '@stdlib/math-base-special-abs' );
var incrmmean = require( '@stdlib/stats-incr-mmean' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving arithmetic mean of absolute values.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmmeanabs( 3 );
*
* var mu = accumulator();
* // returns null
*
* mu = accumulator( 2.0 );
* // returns 2.0
*
* mu = accumulator( -5.0 );
* // returns 3.5
*
* mu = accumulator( 3.0 );
* // returns ~3.33
*
* mu = accumulator( 5.0 );
* // returns ~4.33
*
* mu = accumulator();
* // returns ~4.33
*/
function incrmmeanabs( W ) {
	var mean;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a positive integer. Value: `%s`.', W ) );
	}
	mean = incrmmean( W );
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mean. If not provided a value, the accumulator function returns the current mean.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} mean or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return mean();
		}
		return mean( abs( x ) );
	}
}


// EXPORTS //

module.exports = incrmmeanabs;
