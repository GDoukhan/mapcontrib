
import 'babel-polyfill';
import assert from 'assert';

import GeoUtils from 'core/geoUtils';


describe('GeoUtils', () => {
    describe('zoomXYToLatLng', () => {
        it('Should return a latitude and a longitude', () => {
            const expected = [81.72318761821157, -140.2734375];

            const result = GeoUtils.zoomXYToLatLng(10, 113, 84);

            assert.deepEqual(result, expected);
        });
    });

    describe('zoomLatLngToXY', () => {
        it('Should return XY values', () => {
            const expected = [443, 510];

            const result = GeoUtils.zoomLatLngToXY(10, 0.568, -24.196);

            assert.deepEqual(result, expected);
        });
    });

    describe('zoomLatLngToFloatXY', () => {
        it('Should return XY values', () => {
            const expected = [
                443.1758222222222,
                510.3843290914867,
            ];

            const result = GeoUtils.zoomLatLngToFloatXY(10, 0.568, -24.196);

            assert.deepEqual(result, expected);
        });
    });

    describe('_sinh', () => {
        it('Should return an hyperbolic sine', () => {
            const expected = 3.6268604078470186;

            const result = GeoUtils._sinh(2);

            assert.equal(result, expected);
        });
    });
});
