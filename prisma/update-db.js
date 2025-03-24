"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function updateSlugTr() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, posts, _i, posts_1, post, newLocale;
        var _e, _f, _g, _h, _j, _k;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    _b = (_a = prisma.post).updateMany;
                    _e = {
                        where: {
                            locale: "fr",
                        }
                    };
                    _f = {};
                    _g = {};
                    return [4 /*yield*/, prisma.$queryRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["CONCAT(title, '_not_translated')"], ["CONCAT(title, '_not_translated')"])))];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_e.data = (_f.slugtr = (_g.set = _l.sent(),
                            _g),
                            _f),
                            _e)])];
                case 2:
                    _l.sent();
                    _d = (_c = prisma.post).updateMany;
                    _h = {
                        where: {
                            locale: "en",
                        }
                    };
                    _j = {};
                    _k = {};
                    return [4 /*yield*/, prisma.$queryRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["CONCAT(title, '_not_translated')"], ["CONCAT(title, '_not_translated')"])))];
                case 3: return [4 /*yield*/, _d.apply(_c, [(_h.data = (_j.slugtr = (_k.set = _l.sent(),
                            _k),
                            _j),
                            _h)])];
                case 4:
                    _l.sent();
                    return [4 /*yield*/, prisma.post.findMany({
                            include: {
                                authors: true,
                                labels: true,
                            },
                        })];
                case 5:
                    posts = _l.sent();
                    _i = 0, posts_1 = posts;
                    _l.label = 6;
                case 6:
                    if (!(_i < posts_1.length)) return [3 /*break*/, 9];
                    post = posts_1[_i];
                    newLocale = post.locale === "fr" ? "en" : "fr";
                    return [4 /*yield*/, prisma.post.create({
                            data: {
                                title: post.title + "_not_translated",
                                locale: newLocale,
                                slugtr: post.slugtr,
                                slug: post.slug,
                                authors: {
                                    connect: post.authors.map(function (author) { return ({ id: author.id }); }),
                                },
                                content: "",
                                validated: false,
                                labels: {
                                    connect: post.labels.map(function (label) { return ({ id: label.id }); }),
                                },
                            },
                        })];
                case 7:
                    _l.sent();
                    _l.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 6];
                case 9: return [2 /*return*/];
            }
        });
    });
}
updateSlugTr()
    .then(function () {
    console.log("Mise à jour terminée");
    prisma.$disconnect();
})
    .catch(function (error) {
    console.error("Erreur :", error);
    prisma.$disconnect();
});
var templateObject_1, templateObject_2;
