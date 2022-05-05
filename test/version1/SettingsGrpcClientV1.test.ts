import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { SettingsMemoryPersistence } from 'service-settings-node';
import { SettingsController } from 'service-settings-node';
import { SettingsGrpcServiceV1 } from 'service-settings-node';
import { SettingsGrpcClientV1 } from '../../src/version1/SettingsGrpcClientV1';
import { SettingsClientFixtureV1 } from './SettingsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SettingsGrpcClientV1', ()=> {
    let service: SettingsGrpcServiceV1;
    let client: SettingsGrpcClientV1;
    let fixture: SettingsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new SettingsMemoryPersistence();
        let controller = new SettingsController();

        service = new SettingsGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-settings', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-settings', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-settings', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SettingsGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new SettingsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
