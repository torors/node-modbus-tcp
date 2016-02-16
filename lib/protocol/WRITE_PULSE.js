var Package = require("./tools").Package;
var packbits= require("./tools").packbits;
var pack    = require("./tools").pack2uint16;

exports.request = function (transactionId, unitId, address, duration, value) {
        var buf = new Buffer(5);
        var bits = packbits(value);

        buf.writeUInt16BE(address, 0);
        buf.writeUInt16BE(duration, 2);

        buf[4] = value ? 0xFF : 0x00;

        return new Package(
                transactionId,
                unitId,
                "WRITE_PULSE",
                buf
        );
};
exports.response = exports.request;
