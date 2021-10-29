"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeEntity = void 0;
const symbiosis_1 = require("@techmmunity/symbiosis");
let ChallengeEntity = class ChallengeEntity {
};
__decorate([
    (0, symbiosis_1.Index)("level_url_index"),
    (0, symbiosis_1.PrimaryColumn)(),
    __metadata("design:type", String)
], ChallengeEntity.prototype, "url", void 0);
__decorate([
    (0, symbiosis_1.Column)({
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], ChallengeEntity.prototype, "count", void 0);
__decorate([
    (0, symbiosis_1.Index)("level_url_index"),
    (0, symbiosis_1.Column)(),
    __metadata("design:type", Number)
], ChallengeEntity.prototype, "level", void 0);
ChallengeEntity = __decorate([
    (0, symbiosis_1.Entity)()
], ChallengeEntity);
exports.ChallengeEntity = ChallengeEntity;
