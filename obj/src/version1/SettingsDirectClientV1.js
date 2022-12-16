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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class SettingsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_1.Descriptor("service-settings", "controller", "*", "*", "*"));
    }
    getSectionIds(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'settings.get_section_ids');
            try {
                let res = yield this._controller.getSectionIds(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getSections(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'settings.get_sections');
            try {
                let res = yield this._controller.getSections(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getSectionById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'settings.get_sections_by_id');
            try {
                let res = yield this._controller.getSectionById(correlationId, id);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setSection(correlationId, id, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'settings.set_sections');
            try {
                let res = yield this._controller.setSection(correlationId, id, parameters);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    modifySection(correlationId, id, updateParams, incrementParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'settings.modify_sections');
            try {
                let res = yield this._controller.modifySection(correlationId, id, updateParams, incrementParams);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.SettingsDirectClientV1 = SettingsDirectClientV1;
//# sourceMappingURL=SettingsDirectClientV1.js.map