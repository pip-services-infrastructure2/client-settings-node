import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { SettingsMemoryPersistence } from 'service-settings-node';
import { SettingsController } from 'service-settings-node';
import { SettingsDirectClientV1 } from '../../src/version1/SettingsDirectClientV1';
import { SettingsClientFixtureV1 } from './SettingsClientFixtureV1';

suite('SettingsDirectClientV1', ()=> {
    let client: SettingsDirectClientV1;
    let fixture: SettingsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new SettingsMemoryPersistence();
        let controller = new SettingsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-settings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-settings', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new SettingsDirectClientV1();
        client.setReferences(references);

        fixture = new SettingsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
