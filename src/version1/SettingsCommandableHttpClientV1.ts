import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { SettingsSectionV1 } from './SettingsSectionV1';
import { ISettingsClientV1 } from './ISettingsClientV1';

export class SettingsCommandableHttpClientV1 extends CommandableHttpClient implements ISettingsClientV1 {

    constructor(config?: any) {
        super('v1/settings');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getSectionIds(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<string>> {
        return await this.callCommand(
            'get_section_ids',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getSections(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SettingsSectionV1>> {
        let page = await this.callCommand<any>(
            'get_sections',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
        if (page) {
            page.data = page.data.map((r) => {
                r.parameters = ConfigParams.fromValue(r.parameters);
                return r;
            });
        }
        return page;
    }
    
    public async getSectionById(correlationId: string, id: string): Promise<ConfigParams> {
        let parameters = await this.callCommand<any>(
            'get_section_by_id',
            correlationId,
            {
                id: id
            }
        );

        if (parameters)
            parameters = ConfigParams.fromValue(parameters);
        return parameters;
    }

    public async setSection(correlationId: string, id: string, parameters: ConfigParams): Promise<ConfigParams> {
        let newParameters = await this.callCommand<any>(
            'set_section',
            correlationId,
            {
                id: id,
                parameters: parameters
            }
        );
        if (newParameters)
            newParameters = ConfigParams.fromValue(newParameters);
        return newParameters;
    }

    public async modifySection(correlationId: string, id: string, updateParams: ConfigParams, incrementParams: ConfigParams): Promise<ConfigParams> {
        let parameters = await this.callCommand<any>(
            'modify_section',
            correlationId,
            {
                id: id,
                update_parameters: updateParams,
                increment_parameters: incrementParams
            }
        );

        if (parameters)
            parameters = ConfigParams.fromValue(parameters);
        return parameters;
    }
}
