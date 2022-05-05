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
exports.SettingsGrpcClientV1 = void 0;
const services = require('../../../src/protos/settings_v1_grpc_pb');
const messages = require('../../../src/protos/settings_v1_pb');
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const SettingsGrpcConverterV1_1 = require("./SettingsGrpcConverterV1");
class SettingsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.SettingsClient);
    }
    getSectionIds(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.SettingsPageRequest();
            SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'settings.get_section_ids');
            try {
                let response = yield this.call('get_section_ids', correlationId, request);
                if (response.error != null)
                    throw SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toError(response.error);
                return response ? SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toSettingsIdPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getSections(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.SettingsPageRequest();
            SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'settings.get_sections');
            try {
                let response = yield this.call('get_sections', correlationId, request);
                if (response.error != null)
                    throw SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toError(response.error);
                return response ? SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toSettingsSectionPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getSectionById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.SettingsIdRequest();
            request.setId(id);
            let timing = this.instrument(correlationId, 'settings.get_section_by_id');
            try {
                let response = yield this.call('get_section_by_id', correlationId, request);
                if (response.error != null)
                    throw SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toError(response.error);
                return response ? pip_services3_commons_nodex_1.ConfigParams.fromValue(SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.getMap(response.getParametersMap())) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setSection(correlationId, id, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.SettingsParamsRequest();
            request.setId(id);
            SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.setMap(request.getParametersMap(), parameters);
            let timing = this.instrument(correlationId, 'settings.set_section');
            try {
                let response = yield this.call('set_section', correlationId, request);
                if (response.error != null)
                    throw SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toError(response.error);
                return response ? pip_services3_commons_nodex_1.ConfigParams.fromValue(SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.getMap(response.getParametersMap())) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    modifySection(correlationId, id, updateParams, incrementParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.SettingsModifyParamsRequest();
            request.setId(id);
            SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.setMap(request.getUpdateParametersMap(), updateParams);
            SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.setMap(request.getIncrementParametersMap(), incrementParams);
            let timing = this.instrument(correlationId, 'settings.modify_section');
            try {
                let response = yield this.call('modify_section', correlationId, request);
                if (response.error != null)
                    throw SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.toError(response.error);
                return response ? pip_services3_commons_nodex_1.ConfigParams.fromValue(SettingsGrpcConverterV1_1.SettingsGrpcConverterV1.getMap(response.getParametersMap())) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.SettingsGrpcClientV1 = SettingsGrpcClientV1;
//# sourceMappingURL=SettingsGrpcClientV1.js.map