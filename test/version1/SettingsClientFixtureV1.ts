const assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-nodex';
import { ISettingsClientV1 } from '../../src/version1/ISettingsClientV1';

export class SettingsClientFixtureV1 {
    private _client: ISettingsClientV1;
    
    constructor(client: ISettingsClientV1) {
        this._client = client;
    }

    public async testCrudOperations() {
        // Create one section
        let parameters = await this._client.setSection(
            null,
            'test.1',
            ConfigParams.fromTuples(
                'key1', 'value11',
                'key2', 'value12'
            )
        );

        assert.isObject(parameters);
        assert.equal('value11', parameters.getAsString('key1'));

        // Create another section
        parameters = await  this._client.modifySection(
            null,
            'test.2',
            ConfigParams.fromTuples(
                'key1', 'value21'
            ),
            ConfigParams.fromTuples(
                'key2', 1
            )
        );

        assert.isObject(parameters);
        assert.equal('value21', parameters.getAsString('key1'));
        assert.equal('1', parameters.getAsString('key2'));

        // Get second section
        parameters = await this._client.getSectionById(null, 'test.2');

        assert.isObject(parameters);
        assert.equal('value21', parameters.getAsString('key1'));
        assert.equal('1', parameters.getAsString('key2'));

        // Get all sections
        let page = await this._client.getSections(null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Get all section ids
        let idsPage = await this._client.getSectionIds(null, null, null);

        assert.isObject(idsPage);
        assert.lengthOf(idsPage.data, 2);
    }    
}
