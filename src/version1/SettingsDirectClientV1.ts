import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { ISettingsClientV1 } from './ISettingsClientV1';
//import { ISettingsController } from 'service-settings-nodex';
import { SettingsSectionV1 } from './SettingsSectionV1';

export class SettingsDirectClientV1 extends DirectClient<any> implements ISettingsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-settings", "controller", "*", "*", "*"))
    }

    public async getSectionIds(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<string>> {
        let timing = this.instrument(correlationId, 'settings.get_section_ids');

        try {
            let res = await this._controller.getSectionIds(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getSections(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SettingsSectionV1>> {
        let timing = this.instrument(correlationId, 'settings.get_sections');
        
        try {
            let res = await this._controller.getSections(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async getSectionById(correlationId: string, id: string): Promise<ConfigParams> {
        let timing = this.instrument(correlationId, 'settings.get_sections_by_id');
        
        try {
            let res = await this._controller.getSectionById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async setSection(correlationId: string, id: string, parameters: ConfigParams): Promise<ConfigParams> {
        let timing = this.instrument(correlationId, 'settings.set_sections');
        
        try {
            let res = await this._controller.setSection(correlationId, id, parameters);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async modifySection(correlationId: string, id: string, updateParams: ConfigParams, incrementParams: ConfigParams): Promise<ConfigParams> {
        let timing = this.instrument(correlationId, 'settings.modify_sections');
        
        try {
            let res = await this._controller.modifySection(correlationId, id, updateParams, incrementParams);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}