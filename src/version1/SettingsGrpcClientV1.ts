const services = require('../../../src/protos/settings_v1_grpc_pb');
const messages = require('../../../src/protos/settings_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { ISettingsClientV1 } from './ISettingsClientV1';
import { SettingsSectionV1 } from './SettingsSectionV1';
import { SettingsGrpcConverterV1 } from './SettingsGrpcConverterV1';

export class SettingsGrpcClientV1 extends GrpcClient implements ISettingsClientV1 {
        
    public constructor() {
        super(services.SettingsClient);
    }

    public async getSectionIds(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<string>> {
        let request = new messages.SettingsPageRequest();

        SettingsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(SettingsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'settings.get_section_ids');

        try {
            let response = await this.call<any>('get_section_ids',correlationId, request);

            if (response.error != null)
                throw SettingsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? SettingsGrpcConverterV1.toSettingsIdPage(response.getPage()) : null
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getSections(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SettingsSectionV1>> {
        let request = new messages.SettingsPageRequest();

        SettingsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(SettingsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'settings.get_sections');

        try {
            let response = await this.call<any>('get_sections', correlationId, request);

            if (response.error != null)
                throw SettingsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? SettingsGrpcConverterV1.toSettingsSectionPage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async getSectionById(correlationId: string, id: string): Promise<ConfigParams> {
        let request = new messages.SettingsIdRequest();
        request.setId(id);

        let timing = this.instrument(correlationId, 'settings.get_section_by_id');

        try {
            let response = await this.call<any>('get_section_by_id', correlationId, request);

            if (response.error != null)
                throw SettingsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? ConfigParams.fromValue(SettingsGrpcConverterV1.getMap(response.getParametersMap())) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }    
    }

    public async setSection(correlationId: string, id: string, parameters: ConfigParams): Promise<ConfigParams> {
        let request = new messages.SettingsParamsRequest();
        request.setId(id);
        SettingsGrpcConverterV1.setMap(request.getParametersMap(), parameters);

        let timing = this.instrument(correlationId, 'settings.set_section');

        try {
            let response = await this.call<any>('set_section', correlationId, request);

            if (response.error != null)
                throw SettingsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? ConfigParams.fromValue(SettingsGrpcConverterV1.getMap(response.getParametersMap())) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async modifySection(correlationId: string, id: string, updateParams: ConfigParams, incrementParams: ConfigParams): Promise<ConfigParams> {
        let request = new messages.SettingsModifyParamsRequest();
        request.setId(id);
        SettingsGrpcConverterV1.setMap(request.getUpdateParametersMap(), updateParams);
        SettingsGrpcConverterV1.setMap(request.getIncrementParametersMap(), incrementParams);

        let timing = this.instrument(correlationId, 'settings.modify_section');

        try {
            let response = await this.call<any>('modify_section', correlationId, request);

            if (response.error != null)
                throw SettingsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? ConfigParams.fromValue(SettingsGrpcConverterV1.getMap(response.getParametersMap())) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }   
    }
}
