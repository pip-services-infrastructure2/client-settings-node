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
exports.SettingsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class SettingsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('settings');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getSectionIds(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_section_ids', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getSections(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let page = yield this.callCommand('get_sections', correlationId, {
                filter: filter,
                paging: paging
            });
            if (page) {
                page.data = page.data.map((r) => {
                    r.parameters = pip_services3_commons_nodex_1.ConfigParams.fromValue(r.parameters);
                    return r;
                });
            }
            return page;
        });
    }
    getSectionById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let newParameters = yield this.callCommand('get_section_by_id', correlationId, {
                id: id
            });
            if (newParameters)
                newParameters = pip_services3_commons_nodex_1.ConfigParams.fromValue(newParameters);
            return newParameters;
        });
    }
    setSection(correlationId, id, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let newParameters = yield this.callCommand('set_section', correlationId, {
                id: id,
                parameters: parameters
            });
            if (newParameters)
                newParameters = pip_services3_commons_nodex_1.ConfigParams.fromValue(newParameters);
            return newParameters;
        });
    }
    modifySection(correlationId, id, updateParams, incrementParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let newParameters = yield this.callCommand('modify_section', correlationId, {
                id: id,
                update_parameters: updateParams,
                increment_parameters: incrementParams
            });
            if (newParameters)
                newParameters = pip_services3_commons_nodex_1.ConfigParams.fromValue(newParameters);
            return newParameters;
        });
    }
}
exports.SettingsCommandableLambdaClientV1 = SettingsCommandableLambdaClientV1;
//# sourceMappingURL=SettingsCommandableLambdaClientV1.js.map