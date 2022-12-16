import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { SettingsSectionV1 } from './SettingsSectionV1';
import { ISettingsClientV1 } from './ISettingsClientV1';

export class SettingsCommandableLambdaClientV1 extends CommandableLambdaClient implements ISettingsClientV1 {

    constructor(config?: any) {
        super('settings');

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
        let page = await this.callCommand(
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
        let newParameters = await this.callCommand(
            'get_section_by_id',
            correlationId,
            {
                id: id
            }
        );
        if (newParameters)
            newParameters = ConfigParams.fromValue(newParameters);
        return newParameters;
    }

    public async setSection(correlationId: string, id: string, parameters: ConfigParams): Promise<ConfigParams> {
        let newParameters = await this.callCommand(
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
        let newParameters = await this.callCommand(
            'modify_section',
            correlationId,
            {
                id: id,
                update_parameters: updateParams,
                increment_parameters: incrementParams
            }
        );

        if (newParameters)
            newParameters = ConfigParams.fromValue(newParameters);
        return newParameters;
    }
}
