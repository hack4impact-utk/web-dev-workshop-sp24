"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var mongoose_1 = require("mongoose");
var MONGODB_URI = 'mongodb://localhost:27017/test';
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
var cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
/**
 * Create and cache a MongoDB connection using mongoose
 * @returns {Promise<mongoose.Mongoose>}
 */
function dbConnect() {
    return __awaiter(this, void 0, void 0, function () {
        var opts, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // return cached connection if available
                    if (cached.conn) {
                        return [2 /*return*/, cached.conn];
                    }
                    // open new connection if we are not currently waiting on a promise
                    if (!cached.promise) {
                        opts = {
                            bufferCommands: false,
                        };
                        // set the promise so that other requests can wait on it
                        cached.promise = mongoose_1.default.connect(MONGODB_URI, opts);
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    // wait for promise to resolve
                    _a = cached;
                    return [4 /*yield*/, cached.promise];
                case 2:
                    // wait for promise to resolve
                    _a.conn = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _b.sent();
                    // set promise to null so next attempt to connect will retry
                    cached.promise = null;
                    throw e_1;
                case 4: 
                // return connection
                return [2 /*return*/, cached.conn];
            }
        });
    });
}
var mongoose_2 = require("mongoose");
var VolunteerSchema = new mongoose_2.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    numEvents: {
        type: Number,
        required: false,
        default: 0,
    },
});
var Volunteer = mongoose_2.models.Volunteer ||
    (0, mongoose_2.model)('Volunteer', VolunteerSchema);
function genData() {
    return __awaiter(this, void 0, void 0, function () {
        var vols;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbConnect()];
                case 1:
                    _a.sent();
                    vols = Array.from({ length: 50 }, function () { return ({
                        firstName: faker_1.faker.person.firstName(),
                        lastName: faker_1.faker.person.lastName(),
                        email: faker_1.faker.internet.email(),
                        phone: faker_1.faker.phone.number(),
                        address: faker_1.faker.location.streetAddress(),
                    }); });
                    return [4 /*yield*/, Volunteer.insertMany(vols)];
                case 2:
                    _a.sent();
                    mongoose_1.default.connection.close();
                    return [2 /*return*/];
            }
        });
    });
}
genData();
